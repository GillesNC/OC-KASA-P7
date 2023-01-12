import React from "react";
import { useParams } from "react-router-dom";
import DataFlat from "../data/dataFlat.json";
import { useState } from "react";

//------CREATION DES VOLETS DEPLAINTS DE LA FICHE LOGEMENT-----//
function AccordionHousing() {
    const {idUrl} = useParams();
    const flatExist = DataFlat.find((DataFlat) => DataFlat.id === idUrl);
    const flatequipments = flatExist.equipments.map (equipments => {
        return <p key={equipments}>{equipments}</p>
    })

    /* Active ou désactive le collapse "Description" selon l'action de l'utilisateur */
    const [activeDesc, setActiveDesc] = useState(false);
    const handleClickDesc = () => {
        setActiveDesc(!activeDesc);
    }

    /* Active ou désactive le volet dépliant "Équipements" selon l'action de l'utilisateur */
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