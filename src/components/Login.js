// Login.js

import React, { useState } from 'react';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Effectuez la vérification des identifiants (côté client)
    // Ceci est simplifié à des fins de démonstration
    if (username === 'utilisateur' && password === 'motdepasse') {
      onLogin(username); // Appeler la fonction onLogin avec le nom d'utilisateur
    } else {
      alert('Identifiants incorrects');
    }
  };

  return (
    <div>
      <h2>Connexion</h2>
      <label>
        Nom d'utilisateur:
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <br />
      <label>
        Mot de passe:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <br />
      <button onClick={handleLogin}>Se connecter</button>
    </div>
  );
};

export default Login;
