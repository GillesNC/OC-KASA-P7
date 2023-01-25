import React from "react";
import { useParams, Navigate } from "react-router-dom";
import DataFlat from "../data/dataFlat.json";
import Carrousel from "../components/Carrousel";
import TitleHousing from "../components/TitleHousing";
import TagsHousing from "../components/TagsHousing";
import NotationHousing from "../components/NotationHousing";
import ProfilHousing from "../components/ProfilHousing";
import PageLoader from "../components/PageLoader";
import Collapse from "../components/Collapse";

//------CREATION ET AFFICHAGE DE LA FICHE LOGEMENT DEMANDEE-----//
function Housing () {
    const { idUrl } = useParams();
    const flatExist = DataFlat.find((DataFlat) => DataFlat.id === idUrl);
    const flatequipments = flatExist.equipments.map (equipments => {
        return <p key={equipments}>{equipments}</p>
    })

    return !flatExist ? (
        <Navigate to="/error404" /> //Redirection vers la page d'erreur 404 dans le cas d'un mauvais ID
    ) : (
        <main className="housing">
            <PageLoader />
            <section className="housing__carrousel">
                    <Carrousel />
            </section>
    
            <section className="housing__content">
                <div className="housing__title-tag">
                    <TitleHousing />
                    <TagsHousing />
                </div>
                <div className="housing__notation-profil">
                    <ProfilHousing />
                    <NotationHousing />
                </div>
            </section>
    
            <section className="housing__accordion">
                <Collapse title="Description" content=<p>{flatExist.description}</p> />
                <Collapse title="Equipements" content={flatequipments}/>
            </section>
        </main>
    )
}

export default Housing;