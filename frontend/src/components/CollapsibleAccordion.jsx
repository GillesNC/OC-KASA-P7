import React from "react";
import { useState } from "react";
import DataAbout from "../data/dataAbout.json";

function CollapsibleAccordion () {
    const [active, setActive] = useState(false);
    const handleClick = () => {
        setActive(!active);
    }

    return (
        DataAbout.map((DataAbout) => (
            <article className="accordion" key={DataAbout.title}>
                <div className="accordion__title" onClick={handleClick}>
                    <h2>{DataAbout.title}</h2>
                    <span className="material-symbols-outlined">expand_less</span>
                </div>
                {active && <div className="accordion__content">
                    <p>{DataAbout.content}</p>
                </div>}
            </article>
        ))
    );
}

export default CollapsibleAccordion;