import React from "react";
import { useParams } from "react-router-dom";
import DataFlat from "../data/dataFlat.json";

function RatingsHousing() {
    const {idUrl} = useParams();
    const flatExist = DataFlat.find((DataFlat) => DataFlat.id === idUrl);
    return (
        <article>
            <div className="housing__star">
                <span>{flatExist.rating}</span>
                <div className="housing__profil">
                    <p>{flatExist.host.name}</p>
                    <img src={flatExist.host.picture} alt={flatExist.host.name} />
                </div>
            </div>
        </article>
    )
}

export default RatingsHousing ;