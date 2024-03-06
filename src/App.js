// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Home from './components/Home';
import SchoolData from './components/SchoolData';
import Login from './components/Login';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  // Remplacez ces données factices par vos données réelles
  const data = [
    { id: 'bischoffsheim', name: 'Bischoffsheim', level: 'Primaire', students: 200 },
    { id: 'boersch', name: 'Boersch', level: 'Maternelle', students: 150 },
    { id: 'rosheim', name: 'Rosheim', level: 'Collège', students: 300 },
  ];

  const handleLogin = () => {
    // Simulez l'authentification réussie
    setLoggedIn(true);
  };

  const handleLogout = () => {
    // Déconnectez l'utilisateur
    setLoggedIn(false);
  };

  return (
    <Router>
      <Switch>
        <Route path="/login" exact>
          <Login onLogin={handleLogin} />
        </Route>
        <Route
          path="/"
          render={() => (loggedIn ? (
            <>
              <Route path="/" exact>
                <Home data={data} />
              </Route>
              <Route path="/school/:schoolId">
                <SchoolData data={data} />
              </Route>
              <Route path="/logout" exact>
                <button onClick={handleLogout}>Logout</button>
              </Route>
            </>
          ) : (
            <Redirect to="/login" />
          ))}
        />
      </Switch>
    </Router>
  );
};

export default App;
