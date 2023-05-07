import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import config from '../assets/js/conf/config.js';

function AuthRoute({ component: Component, ...rest }) {
    return <Route
        {...rest}
        render={props =>
            Boolean(localStorage['isLogin']) ? (
                <Component {...props} />
            ) : (
                <Redirect
                    to={{
                        pathname: config.path + "login/index",
                        state: { from: props.location }
                    }}
                />
            )
        }
    />
}

export { AuthRoute };