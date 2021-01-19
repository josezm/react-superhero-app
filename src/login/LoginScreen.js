import React, { useContext } from 'react'
import { AuthContext } from '../auth/AuthContext'
import { types } from '../types/types';

export const LoginScreen = ({history}) => {

    const {dispatch} = useContext(AuthContext);

    const handleLogin = ()=>{

        const lastPage = localStorage.getItem('lastPage') || '/';

        dispatch({
            type: types.login,
            payload : {
                name : 'Jose Z'
            }
        })
        
        history.replace(lastPage); 
    }

    return (
        <div className= "container mt-5">
            <h1> Login </h1>
            <hr/>

            <button className = "btn btn-success" onClick = {handleLogin}>
                Login
            </button>
        </div>
    )
}
