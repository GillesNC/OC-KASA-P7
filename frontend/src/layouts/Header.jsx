import React from "react";
import LogoKasa from "../assets/logo.svg";
import { NavLink } from "react-router-dom";

//------CREATION ET AFFICHAGE DU HEADER-----//
function Header () {
    const activeStyle = {
        textDecoration: "none",
    };

    const activeClassName = {
        textDecoration: "none",
    };

    return (
        <header className="header">
            <div>
                <a href="/"><img src={LogoKasa} alt="Logo Kasa"/></a>
            </div>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/" style = {({ isActive }) => isActive ? activeStyle : undefined}>
                            Accueil
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/About" style = {({ isActive }) => isActive ? activeClassName : undefined}>
                            A Propos
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;