import React from "react";
import LogoKasa from "../assets/logo.svg";

function Header () {
    return (
        <header className="header">
            <div>
                <a href="/"><img src={LogoKasa} alt="Logo Kasa" /></a>
            </div>
            <nav>
                <ul>
                    <li><a href="/">Accueil</a></li>
                    <li><a href="../About">A Propos</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;