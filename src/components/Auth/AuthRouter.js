// AuthRouter.js
import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from './Login';
import Error from "../../utils/Error";


const AuthRouter = () => {
  return (
    <Routes>
      <Route path="login" element={<Login/>} />
      <Route path="error" element={<Error/>}/>
    </Routes>
  );
};

export default AuthRouter;
