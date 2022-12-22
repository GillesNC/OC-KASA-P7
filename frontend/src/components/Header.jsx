import React from "react";
import "../styles/Header.scss";
import LogoKasa from "../assets/logo.svg";

function Header () {
    return (
        <header className="header">
            <div>
                <a href="/"><img src={LogoKasa} alt="Logo Kasa" /></a>
            </div>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="../pages/About">About</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;