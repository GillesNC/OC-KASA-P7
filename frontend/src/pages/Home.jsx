import React from "react";
import Banner from "../components/Banner.jsx"
import CardFlat from "../components/CardFlat.jsx";
import "../styles/Home.scss";

function Home() {
    return(
        <main>
            <Banner />
            <CardFlat />
        </main>
    )
}

export default Home;