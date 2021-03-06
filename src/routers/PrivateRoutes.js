import React from 'react'
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom'

export const PrivateRoute = ({
    isAuthenticated,
    component: Component,
    ...rest

}) => {

    const lastPage = rest.location.pathname;

    localStorage.setItem('lastPage', lastPage);

    return (
        <Route {...rest}
            component = {(props)=>{
                return (isAuthenticated)
                    ? (<Component {...props} />)
                    : ( <Redirect  to = '/login' /> )
            }}
        />
    )
}


PrivateRoute.propTypes = {
    isAuthenticated : PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired,
}
