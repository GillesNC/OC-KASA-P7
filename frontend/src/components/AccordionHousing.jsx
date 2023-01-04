import React from "react";
import { useParams } from "react-router-dom";
import DataFlat from "../data/dataFlat.json";
import { useState } from "react";

function AccordionHousing() {
    const {idUrl} = useParams();
    const flatExist = DataFlat.find((DataFlat) => DataFlat.id === idUrl);
    const flatequipments = flatExist.equipments.map (equipments => {
        return <p key={equipments}>{equipments}</p>
    })

    const [activeDesc, setActiveDesc] = useState(false);
    const handleClickDesc = () => {
        setActiveDesc(!activeDesc);
    }

    const [activeEquip, setActiveEquip] = useState(false);
    const handleClickEquip = () => {
        setActiveEquip(!activeEquip);
    }
    

    return (
        <article className="accordionHousing">
            <div className="accordionHousing__container">
                <div className="accordionHousing__title" onClick={handleClickDesc}>
                    <h2>Description</h2>
                    {activeDesc ? <span className="material-symbols-outlined">expand_less</span> :
                    <span className="material-symbols-outlined">expand_more</span>}
                </div>
                    {activeDesc && <div className="accordionHousing__content">
                    <p>{flatExist.description}</p>
                </div>}
            </div>

            <div className="accordionHousing__container">
                <div className="accordionHousing__title" onClick={handleClickEquip}>
                    <h2>Équipements</h2>
                    {activeEquip ? <span className="material-symbols-outlined">expand_less</span> :
                    <span className="material-symbols-outlined">expand_more</span>}
                </div>
                    {activeEquip && <div className="accordionHousing__content">
                    {flatequipments}
                </div>}
            </div>
        </article>
    )
}

export default AccordionHousing;