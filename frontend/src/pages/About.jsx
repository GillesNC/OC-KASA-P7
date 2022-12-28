import React from "react";
import BannerAbout from "../components/BannerAbout";
import DataAbout from "../data/dataAbout.json";
import CollapsibleAccordion from "../components/CollapsibleAccordion";

function About () {
    return (
        <main>
            <BannerAbout />
            <section className="about" >
                {DataAbout.map (({title, content}) => (
                    <CollapsibleAccordion title={title} content={content}/>
                ))}
            </section>
        </main>
    )
}

export default About;