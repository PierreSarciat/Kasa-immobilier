/*import React from "react";
import data from "../logements.json"; 

import "./home.scss";

const Home = () => {
  return (
    <>
    <div className="slogan">
<p>Chez vous, partout et ailleurs</p>
</div>
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
    </>

  );
};

export default Home;*/

import React, { useEffect, useState } from "react";
import "./home.scss";
import { Link } from "react-router-dom";

const Home = () => {
  const [logements, setLogements] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Remplace l'URL par l'endroit où se trouve ton JSON
    fetch("/logements.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erreur lors du chargement des données");
        }
        return response.json();
      })
      .then((data) => {
        // On ne garde que id, title et cover
        const simplifiedData = data.map(({ id, title, cover }) => ({
          id,
          title,
          cover,
        }));
        setLogements(simplifiedData);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Chargement...</p>;
  }

  return (
    <>
      <div className="slogan">
        <p>Chez vous, partout et ailleurs</p>
      </div>

      <div className="card-logement">
        {logements.map((logement) => (
          <Link key={logement.id} to={`/fiche-logement/${logement.id}`}>
            <article className="card">
              <img src={logement.cover} alt={logement.title} />
              <div className="card-content">
                <h3 className="card-title">{logement.title}</h3>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Home;

