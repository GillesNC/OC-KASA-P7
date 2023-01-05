import React from "react";
import Carrousel from "../components/Carrousel";
import TitleHousing from "../components/TitleHousing";
import TagsHousing from "../components/TagsHousing";
import AccordionHousing from "../components/AccordionHousing";
import NotationHousing from "../components/NotationHousing";
import ProfilHousing from "../components/ProfilHousing";

function Housing () {
    return (
        <main className="housing">
            <section className="housing__carrousel">
                <Carrousel />
            </section>

            <section className="housing__content">
                <TitleHousing />
                <TagsHousing />
            </section>

            <section className="housing__notation-profil">
                <NotationHousing />
                <ProfilHousing />
            </section>

            <section className="housing__accordion">
                <AccordionHousing />
            </section>

        </main>
    )
}

export default Housing;