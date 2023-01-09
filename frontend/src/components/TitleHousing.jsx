import React from "react";
import { useParams } from "react-router-dom";
import DataFlat from "../data/dataFlat.json";

//------Création et affichage du titre de l'annonce de al fiche logement demandée-----//
function TitleHousing () {
    const {idUrl} = useParams();
    const flatExist = DataFlat.find((DataFlat) => DataFlat.id === idUrl)

    return (
        <article>
            <div className="housing__title">
                <h2>{flatExist.title}</h2>
                <p>{flatExist.location}</p>
            </div>
        </article>
    )
}

export default TitleHousing;