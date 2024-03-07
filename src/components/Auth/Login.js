// Login.js
import React, { useState } from "react";
import './Auth.css'

const Login = () => {
  // const [login, setLogin] = useState('')
  // const [password, setPassword] = useState('')
  const [cred, setCred] = useState({ 
  login : "",
  password : "" 
});

const  onChange = (e) => {
  setCred({
    ...cred,
    [e.target.name] : e.target.value
  })

}

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(cred);
    
  }
  

  return (
    <form onSubmit={onSubmit}>
      <div className="group">
        <label htmlFor="login">Identifiant</label>
        <input type="text" name="login" value={cred.login} onChange={onChange} /> 
      </div>
      <div className="group">
        <label htmlFor="password">Mot de passe</label>
        <input type="password" name="password"  value={cred.password} onChange={onChange}  />
      </div>
      <div className="group">
        <button>Connexion</button>
      </div>
    </form>
  );
}

export default Login;
