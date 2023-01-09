import React from "react";
import DataFlat from "../data/dataFlat.json";
import { Link } from "react-router-dom";

//------Création des différentes card (Titre + photo) via la fichier JSON-----//
function CardFlat() {
    return (
        DataFlat.map((DataFlat) => (
            <Link to = {"../Housing/" + DataFlat.id} key={DataFlat.id}>
                <div className="flat">
                    <article className="flat__card" >
                        <div className="flat__text">
                            <h3>{DataFlat.title}</h3> 
                        </div>
                        <div className="flat__image">
                            <img src={DataFlat.cover} alt={DataFlat.title}/>
                        </div>
                    </article>
                </div>
            </Link>
        ))
    );
}

export default CardFlat;