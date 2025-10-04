import React from 'react';
import "./page-erreur.scss"


const Erreur=() => {
    return (
        <div className='erreur-page'>
           <p>404</p>
           <p>Oups! La page que vous demandez n' existe pas</p>
           <p>Retourner sur la page d' accueil</p>
        </div>
    );
};

export default Erreur