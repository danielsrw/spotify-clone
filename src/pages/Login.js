import React from 'react';
import '../css/Login.css';
import spotify from '../images/icons/spotify.png'

function Login() {
    return (
        <div className="login">
            <img src={spotify} />
            <a>LOGIN WITH SPOTIFY</a>
        </div>
    )
}

export default Login
