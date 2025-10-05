import React, { useState } from "react";
import "./carrousel.scss";



const Carrousel = ({ pictures = [] }) => { 
  const [current, setCurrent] = useState(0);
  const length = pictures?.length || 0;   

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!pictures || pictures.length === 0) {
    return <div className="carrousel-empty">Aucune image disponible</div>;
  }
  return (
    <div className="carrousel">
      {length > 1 && (
        <button className="carrousel-control prev" onClick={prevSlide}>
          ❮
        </button>
      )}

       {pictures.map((img, index) => (
        <div
          className={index === current ? "carrousel-item active" : "carousel-item"}
          key={index}
        >
          {index === current && (
            <img src={img} alt={`slide ${index + 1}`} className="carrousel-image" />
          )}
        </div>
      ))}

      {length > 1 && (
        <button className="carrousel-control next" onClick={nextSlide}>
          ❯
        </button>
      )}

       
      {length > 1 && (
        <div className="carrousel-counter">
          {current + 1} / {length}
        </div>
      )}
    </div>
  );
};

export default Carrousel;
