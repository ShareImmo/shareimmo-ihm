import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

/*const express = require("express");
const mysql = require("mysql");
const app = express();
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "123456",
  database: "shareimmo" 
});

app.post('/register', (req, res) =>{
  const nom = req.body.nom;
  const prenom = req.body.prenom;
  const email = req.body.email;
  const mot_de_passe = req.body.mot_de_passe;
  

  db.query("INSERT INTO User (user_id, nom, prenom, email, mot_de_passe, telephone, carte_identite, role, date_dernier_login) values (?,?,?,?,?,?,?,?,?)",
   [user_id, nom, prenom, email, mot_de_passe, telephone, carte_identite, role, date_dernier_login], 
  (err, result) => {
    console.log(err);
  });
});

app.listen(3007, () => {
  console.log("server running");
});*/

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
