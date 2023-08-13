import './accueil.css';
import { Route, Routes } from 'react-router-dom';
import {useState, useEffect} from "react";
import {AccueilComponent} from './AccueilComponent';
import {Login} from './Login';
import {Register} from './Register';
import {NavBar} from './NavBar';

const App = () => {
  
  return (
      <html lang="fr" xmlns="http://www.w3.org/1999/xhtml">
      <head>
          <meta charset="utf-8"/>
          <link rel="stylesheet" href="style.css"/>
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"/>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"/>
          <title>ShareImmo</title>
      </head>
      <body>
        <NavBar/>
        <Routes>
          <Route path="/" element={<AccueilComponent/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
        </Routes>
      </body>
      
    </html>
    
  );
}

export default App;
