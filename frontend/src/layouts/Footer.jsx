import React from "react";
import logoFooter from "../assets/logoFooter.png";
// import "../styles/Footer.scss";

function Footer() {
    return (
        <footer className="footer">
            <div>
                <a href="/"><img src={logoFooter} alt="Logo Kasa" /></a>
            </div>
            <div>
                <p>© 2020 Kasa. All rights reserved</p>
            </div>
        </footer>
    )
}

export default Footer;