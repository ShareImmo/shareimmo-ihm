import React from 'react';
import './accueil.css';
import { Link } from 'react-router-dom';
import resizedS from './images/resizedS.png';



export const Footer = () => {

  const footerStyle = {
    backgroundColor: '#324393',
    height: '240px',
    width: '100%',
    marginBottom: '0px',
    paddingTop: '10px',
  };

  const footerpStyle = {
    float: 'right',
    marginRight: '10%',
    color: 'white',
    marginTop: '11px',
  };

  const btnModele = {
    padding: '2%',
    color: 'white',
    textDecoration: 'none',
  };

  return (
    <div>
      <br/><br/>
      <footer style={footerStyle}>
        <div className="containerd text-center">
            <div className="row" style={{width: '80%', margin: '0 auto'}}>
                <div className="col-md-4">
                    <img src={resizedS} alt="Company Logo" width="100" style={{marginBottom:'10px'}} />
                    <p style={{color: 'white', fontSize: 'bold'}}>ShareImmo est une plateforme d’investissement dans l’immobilier tokenisé en France. 
                      Elle est basée sur la blockchain pour fluidifier les échanges et les transactions. 
                      Une nouvelle façon d’investir de manière simple, peu coûteuse et décentralisée, 
                      ouvrant l’investissement immobilier à un public beaucoup plus large.</p>
                </div>
                <div className="col-md-4">
                <ul className="list-unstyled" >
                        <li ><Link to="/apropos" className="shadow" style={btnModele}>A propos</Link></li>
                        <li><Link to="/contact" className="shadow" style={btnModele}>Nous contacter</Link></li>
                        <li><Link to="/cgu" className="shadow" style={btnModele}>CGU</Link></li>
                    </ul>
                </div>
                <div className="col-md-4">
                  <p  style={footerpStyle}>
                    © 2023 ShareImmo
                  </p>
                </div>
            </div>
        </div>
      </footer>
    </div>
   
        
  );
};