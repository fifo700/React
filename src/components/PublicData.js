// SchoolData.js

import React from 'react';

const SchoolData = ({ school }) => {
  return (
    <div>
      <h2>{school.name}</h2>
      <p>Niveau: {school.level}</p>
      <p>Effectifs: {school.students}</p>
      <p>Coordonnées: {school.coordinates}</p>
      {/* Ajoutez d'autres informations spécifiques ici */}
    </div>
  );
};

export default SchoolData;
