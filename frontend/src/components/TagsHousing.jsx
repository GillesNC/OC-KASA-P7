import React from "react";
import { useParams } from "react-router-dom";
import DataFlat from "../data/dataFlat.json";

//------CREATION ET AFFICHAGE DES DIFFERENTS "TAGS" DE LA FICHE LOGEMENT DEMANDEE-----//
function TagsHousing () {
    const {idUrl} = useParams();
    const flatExist = DataFlat.find((DataFlat) => DataFlat.id === idUrl);
    const tag = flatExist.tags.map (tags => {
        return <span key={tags}>{tags}</span>
    })

    return (
        <article>
                <div className="housing__tag">
                    {tag}
                </div>    
        </article>
    )
}

export default TagsHousing;