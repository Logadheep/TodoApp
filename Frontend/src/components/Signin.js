import React from 'react';
import { Link } from 'react-router-dom';
import './signin.css';

function Signin(){
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Signin");
    }

    return (
        <>
            <h1>Signin</h1>
            <Link to="/signup" style={{float:'right'}}> Signup </Link>
            <form>
                <label> Email </label>
                <input name="email" type="email" placeholder="Enter Email" />
                <br></br>
                <label> Password </label>
                <input name="password" type="password" placeholder="Enter Password" />
                <br></br>
                <button type="submit" style={{float:'none'}} onSubmit={handleSubmit}> Signin </button>
            </form>
        </>
    );
}

export default Signin;