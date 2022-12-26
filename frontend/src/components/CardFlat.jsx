import React from "react";
import DataFlat from "../data/dataFlat.json";

function CardFlat() {
    return (
        DataFlat.map((DataFlat) => (
            <div className="flat" key={DataFlat.id}>
                <article className="flat__card" >
                    <div className="flat__text">
                        <h3>{DataFlat.title}</h3> 
                    </div>
                    <img src={DataFlat.cover} alt={DataFlat.title}/> 
                </article>
            </div>
        ))
    );
}

export default CardFlat;