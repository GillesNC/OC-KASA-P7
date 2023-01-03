import React from "react";
import { useParams } from "react-router-dom";
import Carrousel from "../components/Carrousel";
import ContentHousing from "../components/ContentHousing";
// import AccordionHousing from "../components/AccordionHousing"

function Housing () {
    const {idUrl} = useParams();
    console.log(idUrl);
    
    return (
        <main className="housing">
            <section>
               <article className="housing__carrousel">
                    <Carrousel />
               </article>
            </section>

            <section className="housing__content">
                <ContentHousing />
            </section>

            <section>
                <article className="housing__accordion">
                    {/* <AccordionHousing /> */}
                </article>
            </section>
        </main>
    )
}

export default Housing;