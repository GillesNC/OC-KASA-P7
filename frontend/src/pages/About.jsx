import React from "react";
import BannerAbout from "../components/BannerAbout";
import DataAbout from "../data/dataAbout.json";
import Collapse from "../components/Collapse";
import PageLoader from "../components/PageLoader";

//------CREATION ET AFFICHAGE DE LA PAGE "ABOUT"-----// 
function About () {
    return (
        <main>
            <PageLoader />
            <BannerAbout />
            <section className="about">
                {DataAbout.map (({title, content}) => (
                    <Collapse title={title} content={content} key={title}/>
                ))}
            </section>
        </main>
    )
}

export default About;