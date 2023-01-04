import React from "react";
// import { useParams } from "react-router-dom";
import Carrousel from "../components/Carrousel";
import TitleHousing from "../components/TitleHousing";
import TagsHousing from "../components/TagsHousing";
import AccordionHousing from "../components/AccordionHousing";

function Housing () {
    
    return (
        <main className="housing">
            <section>
               <article className="housing__carrousel">
                    <Carrousel />
               </article>
            </section>

            <section className="housing__content">
                <TitleHousing />
                <TagsHousing />
            </section>

            <section>
                <article className="housing__accordion">
                    <AccordionHousing />
                </article>
            </section>
        </main>
    )
}

export default Housing;