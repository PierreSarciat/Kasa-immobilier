import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Carrousel from "../components/carrousel.jsx";
import Dropdown from "../components/dropdown.jsx";
import Star from "../components/Star.jsx";
import "./fiche-logements.scss";

const FicheLogement = () => {
  const { id } = useParams();
  const [logement, setLogement] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/logements.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erreur lors du chargement des données");
        }
        return response.json();
      })
      .then((data) => {
        const found = data.find((item) => item.id === id);
        setLogement(found || null);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Chargement...</p>;
  if (!logement) return <p>Logement introuvable</p>;

  /*const maxRating = 5;*/

  return (
    <div className="logement-page">
      {/* Carrousel */}
      <Carrousel pictures={logement.pictures} />

      {/* Header logement */}
      <div className="logement-header">
        <div className="logement-info">
          <h1>{logement.title}</h1>
          <p>{logement.location}</p>

          {/* Tags */}
          <div className="tags">
            {logement.tags?.map((tag, index) => (
              <span key={index} className="tag">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Hôte et rating */}
        <div className="host-rating">
          <div className="host">
            <p>{logement.host?.name}</p>
            <img src={logement.host?.picture} alt={logement.host?.name} />
          </div>

          <div className="rating">
            {Array.from({ length: 5 }, (_, i) => (
              <Star key={i} filled={i < logement.rating} />
            ))}
          </div>

        </div>
      </div>

      {/* Dropdown Description et Équipements */}
      <div className="dropdown-content">
        <Dropdown title="Description">
          <p>{logement.description}</p>
        </Dropdown>

        {logement.equipments && (
          <Dropdown title="Équipements">
            <ul>
              {logement.equipments.map((equip, index) => (
                <li key={index}>{equip}</li>
              ))}
            </ul>
          </Dropdown>
        )}
      </div>
    </div>
  );
};

export default FicheLogement;
