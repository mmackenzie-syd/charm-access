// Manages the AWS Cognito
import {
    CognitoUserPool,
    CognitoUserAttribute,
    CognitoUser,
    AuthenticationDetails,
} from 'amazon-cognito-identity-js';

const poolData = {
    UserPoolId: process.env.REACT_APP_USER_POOL_ID,
    ClientId: process.env.REACT_APP_CLIENT_ID,
};

const userPool = new CognitoUserPool(poolData);

class UserService {
    constructor(){
        if(! UserService.instance){
            this.cognitoUser = null;
            this.token = null;
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
                onSuccess: function(result) {
                    that.token = result.getIdToken().getJwtToken();
                    resolve({
                        type: 'SUCCESS',
                        name: email,
                    });
                },
                newPasswordRequired: function(result, session) {
                    resolve({
                        type: 'RESET'
                    });
                },
                onFailure: function(err) {
                    alert(err.message || JSON.stringify(err));
                    reject(err);
                },
            });
        });
    }

    reset(password) {
        const that = this;
        return new Promise((resolve, reject) => {
            that.cognitoUser.completeNewPasswordChallenge(password, [], {
                onSuccess: function(result) {
                    resolve({
                        type: 'SUCCESS'
                    })
                },
                onFailure: function(err) {
                    alert(err.message || JSON.stringify(err));
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
export default instance;
