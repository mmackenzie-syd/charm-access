// Manages the AWS Cognito
import AWS from 'aws-sdk';
import {
    CognitoUserPool,
    CognitoUser,
    AuthenticationDetails,
} from 'amazon-cognito-identity-js';

import ConfigAWS from "../ConfigAWS";

const {
    REGION,
    BUCKET_NAME,
    USER_POOL_ID,
    CLIENT_ID,
    IDENTITY_POOL_ID
} = ConfigAWS;

const poolData = {
    UserPoolId: USER_POOL_ID,
    ClientId: CLIENT_ID,
};

const albumBucketName = BUCKET_NAME;

AWS.config.region = REGION;

let s3;

const setCredentials = (token) => {
    const key = `cognito-idp.${REGION}.amazonaws.com/${USER_POOL_ID}`;
    const Logins = {};
    Logins[key] = token;
    AWS.config.credentials = new AWS.CognitoIdentityCredentials({
        IdentityPoolId: IDENTITY_POOL_ID,
        Logins
    });

    s3 = new AWS.S3({
        apiVersion: '2006-03-01',
        params: {Bucket: albumBucketName}
    });
}

const userPool = new CognitoUserPool(poolData);

class UserService {
    constructor(){
        if(! UserService.instance){
            this.cognitoUser = null;
            this.token = null;
            this.getToken();
            //
            UserService.instance = this;
        }
        return UserService.instance;
    }

    getToken() {
        const that = this;
        return new Promise( (resolve, reject) => {
            if (that.token === null) {
                that.cognitoUser = userPool.getCurrentUser();
                if (that.cognitoUser !== null) {
                    that.cognitoUser.getSession(function (err, session) {
                        if (err) {
                            reject(err);
                        }
                        that.token = session.getIdToken().getJwtToken();
                        setCredentials(that.token);
                        resolve(that.token);
                    });
                }
            } else {
                resolve(that.token);
            }
        });
    }

    signin(email, password) {
        const that = this;
        const authenticationData = {
            Username: email,
            Password: password,
        };
        const authenticationDetails = new AuthenticationDetails(
            authenticationData
        );

        const userData = {
            Username: email,
            Pool: userPool,
        };
        this.cognitoUser = new CognitoUser(userData);

        return new Promise((resolve, reject) => {
            that.cognitoUser.authenticateUser(authenticationDetails, {
                onSuccess: (result) => {
                    that.token = result.getIdToken().getJwtToken();
                    setCredentials(that.token);
                    resolve('SUCCESS');
                },
                newPasswordRequired: (result, session) => {
                    resolve('RESET');
                },
                onFailure: (err) => {
                    reject(err);
                },
            });
        });
    }

    reset(password) {
        const that = this;
        return new Promise((resolve, reject) => {
            that.cognitoUser.completeNewPasswordChallenge(password, [], {
                onSuccess: (result) => {
                    that.token = result.getIdToken().getJwtToken();
                    setCredentials(that.token);
                    resolve('SUCCESS');
                },
                onFailure: (err) => {
                    reject(err);
                }}
            );
        })
    }

    signout() {
        this.cognitoUser.signOut();
        this.token = null;
    }
}

const instance = new UserService();

export default {
    UserService: instance,
    AWS,
    s3
}
