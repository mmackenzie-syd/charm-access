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
    UserPoolId: 'ap-southeast-2_2jM17jIwp',
    ClientId: '2jbqffoa0speanm98bh7rklinb',
};
const userPool = new CognitoUserPool(poolData);
let cognitoUser;
let token = null;

export const getToken =  () => {
    return new Promise( (resolve, reject) => {
        if (token === null) {
            const cognitoUser = userPool.getCurrentUser();
            if (cognitoUser !== null) {
                cognitoUser.getSession(function (err, session) {
                    if (err) {
                        reject(err);
                    }
                    token = session.getIdToken().getJwtToken();
                    console.log('token', token)
                    resolve(token);
                });
            }
        } else {
            resolve(token);
        }
    });
};

export const signin = (email, password) => async(dispatch) => {
    dispatch({type: USER_REQUEST});

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
    cognitoUser = new CognitoUser(userData);
    cognitoUser.authenticateUser(authenticationDetails, {
        onSuccess: function(result) {
            token = result.getIdToken().getJwtToken();
            dispatch({type: USER_SUCCESS, payload: email});
        },
        newPasswordRequired: function(result, session) {
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
    cognitoUser.signOut();
    token = null;
    dispatch({ type: USER_REMOVE });
}
