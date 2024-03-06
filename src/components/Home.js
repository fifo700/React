// Home.js
import React from 'react';
import { Link } from 'react-router-dom';

const Home = ({ data }) => {
  return (
    <div>
      <h1>OpenEduc - Accueil</h1>
      <ul>
        {data.map((school) => (
          <li key={school.id}>
            <Link to={`/school/${school.id}`}>{school.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
