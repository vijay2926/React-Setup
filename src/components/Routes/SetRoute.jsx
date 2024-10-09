
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
 
  import '../css/style.scss'   
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../../node_modules/bootstrap/dist/js/bootstrap.min.js' ;
 
import React, { useState, useEffect } from 'react';   
import Login from "../jsx/login/login.jsx";
import Sign_up from "../jsx/sign-up/sign_up.jsx";
 
 
 


function SetRoute() {
 
 
  return (
    <>
        <Router>  
        <Routes>  
        <Route path="/" element={  <Login />}></Route>  
        <Route path="/sign-up" element={  <Sign_up />}></Route>  
        
        </Routes>
      </Router>
    </>

  );
};

export default SetRoute;




