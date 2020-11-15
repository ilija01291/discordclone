import { Button } from '@material-ui/core';
import React from 'react'
import { auth, provider } from './firebase';
import "./Login.css";

function Login() {
    const signIn = ()=> {
        auth.signInWithPopup(provider).catch((error) => alert(error.message)
        );
        
    };
    return (
            <div className="login">
                <h2>
                    I am login page
                </h2>
                <div className="login_logo">
                    <img src="https://pbs.twimg.com/media/Cowh11-VUAE6K9u.png" alt="" />
                </div>
                <Button onClick={signIn} >Sign in</Button>
        </div>
    );
}

export default Login;
