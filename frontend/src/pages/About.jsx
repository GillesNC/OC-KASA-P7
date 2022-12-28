import React from "react";
import BannerAbout from "../components/BannerAbout";
import CollapsibleAccordion from "../components/CollapsibleAccordion";

function About () {
    return (
        <main>
            <BannerAbout />
            <section className="about">
                <div className="about__collapse">
                    <CollapsibleAccordion />
                </div>
            </section>
        </main>
    )
}

export default About;