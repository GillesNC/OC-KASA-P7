import React from "react";
import { useParams } from "react-router-dom";
import DataFlat from "../data/dataFlat.json";
import { useState } from "react";

function AccordionHousing() {
    const {idUrl} = useParams();
    const flatExist = DataFlat.find((DataFlat) => DataFlat.id === idUrl)

    const [active, setActive] = useState(false);
    const handleClick = () => {
        setActive(!active);
    }

    return (
        <article className="accordion">
            <div className="accordion__title" onClick={handleClick}>
                <h2>Description</h2>
                {active ? <span className="material-symbols-outlined">expand_less</span> :
                <span className="material-symbols-outlined">expand_more</span>}
            </div>
            {active && <div className="accordion__content">
                <p>{flatExist.description}</p>
            </div>}

            <div className="accordion__title" onClick={handleClick}>
                <h2>Equipements</h2>
                {active ? <span className="material-symbols-outlined">expand_less</span> :
                <span className="material-symbols-outlined">expand_more</span>}
            </div>
            {active && <div className="accordion__content">
                <p>{flatExist.equipments}</p>
            </div>}
        </article>
    )
}

export default AccordionHousing;