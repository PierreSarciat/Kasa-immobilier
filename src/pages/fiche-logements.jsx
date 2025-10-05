import React from 'react';
import { useParams } from "react-router-dom";
import "./fiche-logements.scss"
import data from "../../public/logements.json";
import Carrousel from "../components/carrousel.jsx";

const FicheLogement = () => {
  const { id } = useParams();
  const logement = data.find(item => item.id === id);

  if (!logement) {
    return <div>Logement introuvable</div>;
  }

  return (
    <div className="logement-page">
      <Carrousel pictures={logement.pictures} />

      <h1>{logement.title}</h1>
      <p>{logement.location}</p>
    </div>
  );
};


export default FicheLogement