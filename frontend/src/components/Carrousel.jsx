import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import DataFlat from "../data/dataFlat.json";

//------Création et affichage du carraousel de la fiche logement demandée-----//
function Carrousel () {
  const {idUrl} = useParams();
  const flatExist = DataFlat.find((DataFlat) => DataFlat.id === idUrl)
  const images = flatExist.pictures;

  const [currentIndex, setCurrentIndex] = useState(0);
  const prev = () => {
    const newIndex = currentIndex - 1;
    setCurrentIndex(newIndex < 0 ? images.length - 1 : newIndex);
  };
    
  const next = () => {
    const newIndex = currentIndex + 1;
    setCurrentIndex(newIndex >= images.length ? 0 : newIndex);
  };

  // const timer = setInterval(next, 2000)

  return (  
    <div>
      <img src={images[currentIndex]} alt="Carousel" />
      <div className="icon-arrow">
        <span className="material-symbols-outlined prev" onClick={prev}>chevron_left</span>
        <span className="material-symbols-outlined next" onClick={next}>chevron_right</span>
      </div>
    </div>
  )
}

export default Carrousel;