import React from "react";
import DataFlat from "../data/dataFlat.json";

function CardFlat() {
    return (
        DataFlat.map((DataFlat) => (
            <section className="cardFlat" key={DataFlat.id}>
                <div className="card">
                    <p>{DataFlat.title}</p>
                </div>

            </section>
        ))
    );
}

export default CardFlat;