import React from "react";
import { useParams } from "react-router-dom";
import DataFlat from "../data/dataFlat.json";

//------CREATION ET AFFICHAGE DU TITRE DE L'ANNONCE DE LA FICHE LOGEMENT DEMANDEE-----//
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