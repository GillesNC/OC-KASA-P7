import React from "react";
import Carrousel from "../components/Carrousel";
import TitleHousing from "../components/TitleHousing";
import TagsHousing from "../components/TagsHousing";
import AccordionHousing from "../components/AccordionHousing";
import RatingsHousing from "../components/RatingsHousing";

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
                <RatingsHousing />
            </section>

            <section className="housing__accordion">
                    <AccordionHousing />
            </section>

        </main>
    )
}

export default Housing;