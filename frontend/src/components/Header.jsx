import React from "react";
import "../styles/Header.scss"
import LogoKasa from "../assets/logo.svg";

function Header () {
    return (
        <header className="header">
            <div>
                <img src={LogoKasa} alt="Logo Kasa" />
            </div>
            <nav>
                
            </nav>
        </header>
    )
}

export default Header;