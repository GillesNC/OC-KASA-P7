import React from "react";
import { useParams } from "react-router-dom";
// import AccordionHousing from "../components/AccordionHousing"
// import ImageCarrousel from "../assets/carrousel.webp";

function Housing () {
    const {id} = useParams();
    console.log(id);

    return (
        <main className="housing">
            <section>
               <article className="housing__carrousel">
                    <p>{id}</p>
               </article>
            </section>

            <section className="housing__content">
                <article className="housing__title">
                </article>

                <article className="housing__tag">
                </article>

                <article className="housing__star">
                </article>
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