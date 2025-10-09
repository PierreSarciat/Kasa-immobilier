import React from 'react';
import "./page-erreur.scss"
import { Link } from "react-router-dom";


const Erreur=() => {
    return (
        <div className='erreur-page'>
           <p>404</p>
           <p>Oups! La page que vous demandez n' existe pas</p>
            <Link to="/">Retour sur la page d'accueil</Link>
        </div>
    );
};

export default Erreur