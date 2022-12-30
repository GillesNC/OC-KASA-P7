import React from "react";

function Error() {
    return (
        <main className="error404">
            <div className="404">
                <span>404</span>
            </div>
            <div className="errorText">
                <p>Oups! 🙈 La page que vous demandez n'existe pas.</p>
            </div>
            <div>
                <a href="/">Retourner sur la page d'accueil</a>
            </div>
        </main>  
    )
}
 
export default Error;