import React from "react";

//------Création et affichage du page "Loader"-----//
function PageLoader () {
    return (
    <div className="container-loader">
        <div className="loader">
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
        </div>
    </div>
    )
}

export default PageLoader;