import React from 'react';
import './accueil.css';
import { Link } from 'react-router-dom';
import resizedS from './images/resizedS.png';
import wallet from './images/wallet.png';
import notif from './images/notif.png';
import info from './images/info.png';



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
        <div class="containerd text-center">
            <div class="row" style={{width: '80%', margin: '0 auto'}}>
                <div class="col-md-4">
                    <img src={resizedS} alt="Company Logo" width="100" style={{marginBottom:'10px'}} />
                    <p style={{color: 'white', fontSize: 'bold'}}>ShareImmo est une plateforme d’investissement dans l’immobilier tokenisé en France. 
                      Elle est basée sur la blockchain pour fluidifier les échanges et les transactions. 
                      Une nouvelle façon d’investir de manière simple, peu coûteuse et décentralisée, 
                      ouvrant l’investissement immobilier à un public beaucoup plus large.</p>
                </div>
                <div class="col-md-4">
                    <ul class="list-unstyled" >
                        <li ><a href="#" class="shadow" style={btnModele}>About Us</a></li>
                        <li><a href="#" class="shadow" style={btnModele}>Contact Us</a></li>
                        <li><Link to="/cgu" class="shadow" style={btnModele}>CGU</Link></li>
                    </ul>
                </div>
                <div class="col-md-4">
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