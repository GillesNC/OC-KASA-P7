import React from "react";
import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import DataFlat from "../data/dataFlat.json";

//------Création et affichage du carraousel de la fiche logement demandée-----//
function Carrousel () {
  const {idUrl} = useParams();
  const flatExist = DataFlat.find((DataFlat) => DataFlat.id === idUrl)
  const images = flatExist.pictures;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeAutoplay, setActiveAutoplay] = useState(true);
  const autoplayRef = useRef();

  const settings = {
    maxItems : images.length,
    speed: 1500,
    autoplay: true,
    autoplaySpeed: 3000
  }

  const playTimer = () => {
    console.log("play Timer");
    setActiveAutoplay(true);
  };

  const pauseTimer = () => {
    console.log("pause Timer");
    setActiveAutoplay(false);
  };

  useEffect(() => {
    if (settings.autoplay && activeAutoplay) {
      clearTimeout(autoplayRef.current);
      autoplayRef.current = setTimeout(() => {
        next();
      }, settings.autoplaySpeed);
    }
  });

  const pagination = index => {
    return (
      <div className="pagination">
        <div>{index + 1}</div>/{settings.maxItems}
      </div>
    );
  };

  const prev = () => {
    const newIndex = currentIndex - 1;
    setCurrentIndex(newIndex < 0 ? images.length - 1 : newIndex);
  };
    
  const next = () => {
    const newIndex = currentIndex + 1;
    setCurrentIndex(newIndex >= images.length ? 0 : newIndex);
  };

  return (  
    <article>
      <img src={images[currentIndex]} alt="Carousel" />
      <div className="carrousel-container">
        <div className="icon-arrow">
          <span className="material-symbols-outlined prev" onClick={prev} onMouseEnter={pauseTimer} onMouseLeave={playTimer}>chevron_left</span>
          <span className="material-symbols-outlined next" onClick={next} onMouseEnter={pauseTimer} onMouseLeave={playTimer}>chevron_right</span>
        </div>
        <div className="pagination-container">
          {pagination(currentIndex)}
        </div>
      </div>
    </article>
  )
}

export default Carrousel;