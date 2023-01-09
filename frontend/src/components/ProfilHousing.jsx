import React from "react";
import { useParams } from "react-router-dom";
import DataFlat from "../data/dataFlat.json";

//------Création et affichage du profil de l'annonceur (Nom + photo)-----//
function ProfilHousing() {
    const {idUrl} = useParams();
    const flatExist = DataFlat.find((DataFlat) => DataFlat.id === idUrl);

    return (
        <article className="housing__profil">
            <div className="profil-name">
                <p>{flatExist.host.name}</p>
            </div>

            <div className="profil-photo">
                <img src={flatExist.host.picture} alt={flatExist.host.name} />
            </div>
        </article>
    )
}

export default ProfilHousing;