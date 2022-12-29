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
                    <div className="flat__image">
                        <img src={DataFlat.cover} alt={DataFlat.title}/>
                    </div>
                </article>
            </div>
        ))
    );
}

export default CardFlat;