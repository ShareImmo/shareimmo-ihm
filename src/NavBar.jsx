import React from 'react';
import './accueil.css';
import { Link } from 'react-router-dom';
import resizedS from './images/resizedS.png';




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

  const colorWhite = {
    color: 'white',
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
              <Link className="nav-link" to="/blog">ShareImmo Blog.</Link>
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
			<button type="button" className="btn btn-primary" id="cnx"><Link style={combinedStyles} to="/profile"><i className="bi bi-person-circle">Profile</i></Link></button>
            &nbsp;&nbsp;&nbsp;
          </div>
        </div>
      </nav>
      <br/>
    </div>     
  );
};