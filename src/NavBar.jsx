import React from 'react';
import './accueil.css';
import { Link } from 'react-router-dom';
import resizedS from './images/resizedS.png';
import back1 from './images/back1.png';
import choix from './images/choix.png';
import down from './images/down.png';
import euro from './images/euro.png';
import increase from './images/increase.png';
import invSeul from './images/invSeul.png';
import up2 from './images/up2.png';



export const NavBar = () => {
  const navbarBrandStyle = {
    width: '200px',
    marginLeft: '10%',
  };

  const buttonStyle = {
    color: '#ff5757',
    backgroundColor: 'white',
    borderColor: '#ff5757',
  };

  const LinkStyle = {
    textDecoration: 'none',
  }

  const textCenterStyle = {
    textAlign: 'center',
  };

  const colorff5757 = {
    color: '#ff5757',
  };

  const colorWhite = {
    color: 'white',
  };

  const color324393 = {
    color: '#324393',
  };

  const width3 = {
    width: '3%',
  };

  const width10 = {
    width: '10%',
  };

  const padding4 = {
    padding: '4%',
  };

  const width90 = {
    width: '90%',
  };

  const btnCompteStyle = {
    float: 'right',
    width: '40%',
    padding: '1%',
    marginRight: '1%'
  };

  const btnDemoStyle = {
    color: '#ff5757', 
    backgroundColor: 'white',
    borderColor: '#ff5757',
    width: '40%',
    padding: '1%'
  };

  const logo2 = {
    width: '50%',
    margin: '5% 5% 5% 25%',
  };

  const imgInv = {
    width: '50%',
    margin: '5% 5% 5% 20%',
  };

  const divShadow = {
    backgroundColor: '#324393',
    height: '10%',
    padding: '0% 15% 0% 15%',
  };

  const pStyle = {
    color: 'white',
    width: '70%',
  };

  const footerStyle = {
    backgroundColor: '#324393',
    height: '50px',
    width: '100%',
    marginBottom: '0px',
  };

  const footerpStyle = {
    float: 'right',
    marginRight: '10%',
    color: 'white',
    marginTop: '11px',
  };

  const btnModele = {
    backgroundColor: '#ff5757',
    border: '#ff5757',
    padding: '2%',
  };

  const combinedStyles = { ...LinkStyle, ...colorWhite};
  return (
    <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
        <Link class="navbar-brand" to="/"><img style={navbarBrandStyle} src={resizedS} alt="Logo ShareImmo"/></Link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
            <a class="nav-link active" aria-current="page" href="#">Nos projets</a>
            <a class="nav-link" href="#">Notre modèle</a>
            <a class="nav-link" href="#">ShareImmo Blog.</a>
            <a class="nav-link" href="#">À propos</a>
            <a class="nav-link" href="#">Contact</a>
            <a class="nav-link" href="#">FAQ.</a>
            </div>
        </div>
        <button type="button" class="btn btn-custom" style={buttonStyle}><Link style={LinkStyle} class="colored-ff5757" to="/register">Inscription</Link></button>
        <button type="button" class="btn btn-primary" id="cnx"><Link style={combinedStyles} to="/login">Connexion</Link></button>
        </div>
    </nav>
        
  );
};