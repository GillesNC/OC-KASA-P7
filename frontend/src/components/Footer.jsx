import React from "react";
import logoFooter from "../assets/logoFooter.png";

function Footer() {
    return (
        <footer className="footer">
            <div>
                <img src={logoFooter} alt="Logo Kasa" />
            </div>
            <div>
                <p>© 2020 Kasa. All rights reserved</p>
            </div>
        </footer>
    )
}

export default Footer;