import React from 'react';
import {useSelector} from "react-redux";
import { Route, Redirect }from "react-router-dom";

export default function ProtectedRoute({ component: Component, ...rest }) {
    const userApi = useSelector(state => state.userApi);
    return (
        <Route
            {...rest}
            render={(props) =>
                userApi && userApi.name
                    ? <Component {...props}></Component>
                    : <Redirect to="/" />

            }
        />
    )
}
