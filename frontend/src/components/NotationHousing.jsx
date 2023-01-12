import React from "react";
import { useParams } from "react-router-dom";
import DataFlat from "../data/dataFlat.json";

//------CREATION ET AFFICHAGE DU SYSTEME DE NOTATION DE LA FICHE LOGEMENT DEMANDEE-----//
function NotationHousing() {
  const { idUrl } = useParams();
  const flatExist = DataFlat.find((DataFlat) => DataFlat.id === idUrl);
  const notation = flatExist.rating;
  const note = [1, 2, 3, 4, 5];

  /* Parcours le tableau des notes et détermine si chaque note doit être affiché en étoile rouge ou grise */
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
  
  return (
    <article className="rating">
      {stars}
    </article>
  );
}

export default NotationHousing;