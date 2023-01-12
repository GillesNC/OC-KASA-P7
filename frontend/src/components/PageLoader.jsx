import React from "react";

//------CREATION ET AFFICHAGE DE LA PAGE LOADER-----//
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