import React from "react";
import "./Navbar.css"

function Navbar(){
    return (
        <div id="navbar">
            <div className="container">
                <div id="company-logo">Schooled</div>
                <ul id="navbar-options">
                    <li>Log in</li>
                    <li>Option 2</li>
                    <li>Option 3</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;