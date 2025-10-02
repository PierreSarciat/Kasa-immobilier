import React from "react";
import data from "../logements.json"; 

import "./home.scss";

const Home = () => {
  return (
    <div className="card-logement">
      {data.map((logement) => (
        <a key={logement.id} href={`/fiche-logement/${logement.id}`}>
          <article className="card">
            <img src={logement.cover} alt={logement.title} />
            <div className="card-content">
              <h3 className="card-title">{logement.title}</h3>
              <p className="card-location">{logement.location}</p>
            </div>
          </article>
        </a>
      ))}
    </div>
  );
};

export default Home;
