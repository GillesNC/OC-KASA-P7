import React from "react";
import BannerAbout from "../components/BannerAbout";
import DataAbout from "../data/dataAbout.json";
import AccordionAbout from "../components/AccordionAbout";

function About () {
    return (
        <main>
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