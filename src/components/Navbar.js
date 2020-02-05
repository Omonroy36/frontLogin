import React from "react";
import { Link } from "react-router-dom";

export function Navbar() {

    return (
        <nav>
            <div className="nav-wrapper teal lighten-1">
                <a href="/#" className="brand-logo"><img src="/foxlogo.png" widdth="64px" height="64px" alt="logo" /></a>
                <ul id="nav-mobile" className="right hide-on-med-and-down my-padding">
                    <li><Link to="sass.html">Races</Link></li>
                    <li><Link to="badges.html">Enviroment</Link></li>
                    <li><Link to="collapsible.html">History</Link></li>
                </ul>
            </div>
        </nav>
    );
}