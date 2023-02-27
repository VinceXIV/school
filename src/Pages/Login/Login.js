import React from "react";
import "./Login.css"

function Login(){
    return (
        <div id="login">
            <div className="container">
                <form id="login-form">
                    <div className="input">
                        <label for="email">Enter Email</label>
                        <input type="email"/>
                    </div>
                    <div className="input">
                        <label for="password">Enter Password</label>
                        <input type="email"/>
                    </div>
                    <div id="submit-input" className="input">
                        <input id="login-submit-btn" className="btn" type="submit" value="Submit"/>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login