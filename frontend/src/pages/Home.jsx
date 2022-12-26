import React from "react";
import Banner from "../components/Banner.jsx"
import CardFlat from "../components/CardFlat.jsx";

function Home() {
    return(
        <main>
            <Banner />
            <section className="CardFlat">
                <CardFlat />
            </section> 
        </main>
    )
}

export default Home;