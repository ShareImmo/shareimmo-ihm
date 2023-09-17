import React from 'react';
import './accueil.css';
import { Link } from 'react-router-dom';
import resizedS from './images/resizedS.png';
import wallet from './images/wallet.png';
import notif from './images/notif.png';
import info from './images/info.png';



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
    <div>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/"><img style={navbarBrandStyle} src={resizedS} alt="Logo ShareImmo"/></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link to="/projects" className="nav-link active" aria-current="page">Nos projets</Link>
              <Link to="/modele" className="nav-link" >Notre modèle</Link>
              <Link className="nav-link" href="#">ShareImmo Blog.</Link>
              <Link className="nav-link" to="/apropos">À propos</Link>
              <Link className="nav-link" to="/contact">Contact</Link>
              <Link className="nav-link" to="/faq">FAQ.</Link>
            </div>
            {/*
              <div>
                  <p class="colored-ff5757 align-items-center" style={{marginTop: '1%'}}><strong>50,00 €</strong></p>
                  &nbsp;&nbsp;
                  <a class="image-link" href="#" style={{marginRight: '1%'}}>
                    <img src={wallet} alt="wallet" />
                  </a>
                  <a class="image-link" href="#" style={{marginRight: '1%'}}>
                    <img src={info} alt="informations" />
                  </a>
                  <a class="image-link" href="#" style={{marginRight: '7%'}}>
                    <img src={notif} alt="notifications" />
                  </a>
              </div>
            */}
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <button type="button" className="btn btn-custom" style={buttonStyle}><Link style={{textDecoration:'none', color: '#ff5757'}} className="colored-ff5757" to="/register">Inscription</Link></button>
            &nbsp;&nbsp;&nbsp;
            <button type="button" className="btn btn-primary" id="cnx"><Link style={combinedStyles} to="/login">Connexion</Link></button>
            &nbsp;&nbsp;&nbsp;
          </div>
        </div>
      </nav>
      <br/>
    </div>     
  );
};