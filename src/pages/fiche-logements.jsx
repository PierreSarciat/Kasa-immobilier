import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom"; // ajout de useNavigate
import Carrousel from "@components/carrousel.jsx";
import Dropdown from "@components/dropdown.jsx";
import Star from "@components/Star.jsx";
import "./fiche-logements.scss";

const FicheLogement = () => {
  const { id } = useParams();
  const navigate = useNavigate(); // hook pour redirection

  const [logement, setLogement] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLogement = async () => {
      try {
        const response = await fetch("/logements.json");
        if (!response.ok) {
          throw new Error("Erreur lors du chargement des données");
        }
        const data = await response.json();
        const found = data.find((item) => item.id === id);

        if (!found) {
          // Redirection vers la page d'erreur si l'id n'existe pas
          navigate("/page-erreur", { replace: true });
          return;
        }

        setLogement(found);
      } catch (error) {
        console.error(error);
        navigate("/page-erreur", { replace: true });
      } finally {
        setLoading(false);
      }
    };

    fetchLogement();
  }, [id, navigate]);

  if (loading) return <p>Chargement...</p>;
  // Plus besoin de "Pas de logement" car on redirige déjà

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
