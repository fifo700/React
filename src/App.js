// App.js
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import AuthRouter from './components/Auth/AuthRouter';

function App() {
  return (
    <div className="App">
      {/* Utilisez le composant Router au lieu de BrowserRouter */}
      <Router>
        <Routes>
          {/* Configurez le chemin correct pour vos routes d'authentification */}
          <Route path="/auth/*" element={<AuthRouter />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
