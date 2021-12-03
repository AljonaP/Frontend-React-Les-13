import React from 'react';
import {NavLink, useHistory} from "react-router-dom";
import {logDOM} from "@testing-library/react";

const Login = ({toggleAuth, isAuth}) => {

    const history=useHistory();

    function SignIn() {

        toggleAuth(true)
        history.push("/blogposts");
        console.log(isAuth)
    }
    return (
        <div>
            <h3> Login</h3>
            <p>Klik hier om in te loggen</p>

            <button type="button" onClick={SignIn}>
                Inloggen
            </button>
        </div>

    )
}

export default Login;