import React from "react";
import { useParams } from "react-router-dom";
import DataFlat from "../data/dataFlat.json";

//------Création et affichage du système de notation sur la fiche logement demandée-----//
function NotationHousing() {
    const { idUrl } = useParams();
    const flatExist = DataFlat.find((DataFlat) => DataFlat.id === idUrl);
    const notation = flatExist.rating;
    const note = [1, 2, 3, 4, 5];

    const stars = note.map((note, index) => {
      switch (true) {
        case note <= notation:
          return (
            <span key={index} className="material-symbols-outlined redStar">star</span>
          );
        case note > notation:
          return (
            <span key={index} className="material-symbols-outlined greyStar">star</span>
          );
        default:
          return null;
      }
    });

    console.log(stars);
  
    return (
      <article className="rating">
        {stars}
      </article>
    );
  }

export default NotationHousing;