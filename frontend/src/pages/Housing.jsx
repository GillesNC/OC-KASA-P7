import React from "react";
import { useParams, Navigate } from "react-router-dom";
import DataFlat from "../data/dataFlat.json";
import Carrousel from "../components/Carrousel";
import TitleHousing from "../components/TitleHousing";
import TagsHousing from "../components/TagsHousing";
import AccordionHousing from "../components/AccordionHousing";
import NotationHousing from "../components/NotationHousing";
import ProfilHousing from "../components/ProfilHousing";

function Housing () {
    const { idUrl } = useParams();
    const flatExist = DataFlat.find((DataFlat) => DataFlat.id === idUrl);

    return !flatExist ? (
        <Navigate to="/error404" />
    ) : (
        <main className="housing">
            <section className="housing__carrousel">
                    <Carrousel />
                </section>
    
                <section className="housing__content">
                    <div className="housing__title-tag">
                        <TitleHousing />
                        <TagsHousing />
                    </div>
                    <div className="housing__notation-profil">
                        <ProfilHousing />
                        <NotationHousing />
                    </div>
                </section>
    
                <section className="housing__accordion">
                    <AccordionHousing />
                </section>
        </main>
    )
}

export default Housing;