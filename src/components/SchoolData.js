// SchoolData.js
import React from 'react';
import { useParams } from 'react-router-dom';

const SchoolData = ({ data }) => {
  const { schoolId } = useParams(); // Récupère le paramètre d'URL

  // Recherche des données de l'école spécifiée
  const school = data.find((school) => school.id === schoolId);

  if (!school) {
    return <div>École non trouvée</div>;
  }

  return (
    <div>
      <h2>{school.name}</h2>
      <p>Niveau: {school.level}</p>
      <p>Effectifs: {school.students}</p>
      {/* Ajoutez d'autres informations spécifiques de l'école ici */}
    </div>
  );
};

export default SchoolData;
