import React, { useEffect, useState } from "react";
import "./home.scss";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const [logements, setLogements] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchLogements = async () => {
      try {
        const response = await fetch("/logements.json");
        if (!response.ok) {
          // Redirection vers la page d'erreur si le fichier JSON est introuvable
          navigate("/page-erreur", { replace: true });
          return;
        }
        const data = await response.json();
        // On ne garde que id, title et cover
        const simplifiedData = data.map(({ id, title, cover }) => ({
          id,
          title,
          cover,
        }));
        setLogements(simplifiedData);
      } catch (error) {
        console.error(error);
        navigate("/page-erreur", { replace: true });
      } finally {
        setLoading(false);
      }
    };

    fetchLogements();
  }, [navigate]);

  if (loading) {
    return <p>Chargement...</p>;
  }

  return (
    <>
      <div className="slogan">
        <p><span> Chez vous,</span> partout et ailleurs</p>

      </div>

      <div className="card-logement">
        {logements.map((logement) => (
          <Link key={logement.id} to={`/fiche-logements/${logement.id}`}>
            <article className="card">
              <img src={logement.cover} alt={logement.title} />
              <h3 className="card-title">{logement.title}</h3>
            </article>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Home;
