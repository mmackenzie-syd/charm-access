import Axios from "axios";

import * as AWS from 'aws-sdk/global';

import {useHistory} from "react-router";

import {
    CognitoUserPool,
    CognitoUserAttribute,
    CognitoUser,
    AuthenticationDetails,
} from 'amazon-cognito-identity-js';

import {
    USER_FAIL,
    USER_REQUEST,
    USER_SUCCESS,
    USER_REMOVE,
    USER_RESET
} from "./userConstants";

const poolData = {
    UserPoolId: 'ap-southeast-2_JwMz7ZjO0',
    ClientId: '1t7bb4pa9p7jamr8ngtpa97uus',
};

export const signin = (email, password) => async(dispatch) => {
    // dispatch({ type:     USER_REQUEST,, payload: { email, password }});
    // try {
    //    const { data } = await Axios.post('/api/users/signin', {email, password });
    //    const data = { name: 'mark' };
    //    dispatch({type: USER_SUCCESS, payload: data});
    //    localStorage.setItem('user', JSON.stringify(data));
    // } catch(error) {
    //     dispatch({ type: USER_SIGNIN_FAIL,
    //         payload: error.response && error.response.data.message
    //             ? error.response.data.message
    //             : error.message,
    //     })
    // }
    dispatch({type: USER_REQUEST});

    const authenticationData = {
        Username: email,
        Password: password,
    };
    const authenticationDetails = new AuthenticationDetails(
        authenticationData
    );

    const userPool = new CognitoUserPool(poolData);
    const userData = {
        Username: email,
        Pool: userPool,
    };
    const cognitoUser = new CognitoUser(userData);
    cognitoUser.authenticateUser(authenticationDetails, {
        onSuccess: function(result) {
            const accessToken = result.getAccessToken().getJwtToken();
            dispatch({type: USER_SUCCESS, payload: email});

            //POTENTIAL: Region needs to be set if not already set previously elsewhere.
            // AWS.config.region = '<region>';
            //
            // AWS.config.credentials = new AWS.CognitoIdentityCredentials({
            //     IdentityPoolId: '...', // your identity pool id here
            //     Logins: {
            //         // Change the key below according to the specific region your user pool is in.
            //         'cognito-idp.<region>.amazonaws.com/<YOUR_USER_POOL_ID>': result
            //             .getIdToken()
            //             .getJwtToken(),
            //     },
            // });
            //
            // //refreshes credentials using AWS.CognitoIdentity.getCredentialsForIdentity()
            // AWS.config.credentials.refresh(error => {
            //     if (error) {
            //         console.error(error);
            //     } else {
            //         // Instantiate aws sdk service objects now that the credentials have been updated.
            //         // example: var s3 = new AWS.S3();
            //         console.log('Successfully logged!');
            //     }
            // });
        },
        newPasswordRequired: function(result) {
            const { email } = result;
            dispatch({type: USER_RESET, payload: email});
        },
        onFailure: function(err) {
            alert(err.message || JSON.stringify(err));
        },
    });
}

export const reset = (password) => async(dispatch, getState) => {
    const { userApi } = getState();
    const userPool = new CognitoUserPool(poolData);
    const cognitoUser = new CognitoUser({
        Username: userApi.name,
        Pool: userPool,
    });

    cognitoUser.completeNewPasswordChallenge(password, [], {
        onSuccess: function(result) {
               console.log('res', result)
        },
        onFailure: function(err) {
            alert(err.message || JSON.stringify(err));
        }}
    );


}

export const signout = () => async(dispatch) => {
    localStorage.removeItem('user');
    dispatch({ type: USER_REMOVE });
}
