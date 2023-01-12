import React from "react";
import BannerAbout from "../components/BannerAbout";
import DataAbout from "../data/dataAbout.json";
import AccordionAbout from "../components/AccordionAbout";
import PageLoader from "../components/PageLoader";

//------Création et affichage de la page "About"-----//
function About () {
    return (
        <main>
            <PageLoader />
            <BannerAbout />
            <section className="about">
                {DataAbout.map (({title, content}) => (
                    <AccordionAbout title={title} content={content} key={title}/>
                ))}
            </section>
        </main>
    )
}

export default About;