import React from 'react';
import './apropos.css';
import { Link } from 'react-router-dom';
import resizedS from './images/resizedS.png';
import wallet from './images/wallet.png';
import bigLogo from './images/bigLogo.png';
import bg1 from './images/bg1.png';



export const Contact = () => {
  
  const LinkStyle = {
    textDecoration: 'none',
  }

  const colorWhite = {
    color: 'white',
  };

  return (
    <div className='d'>
        <nav class="navbar navbar-expand-lg navbar-light" style={{backgroundImage: `url(${bg1})`, height: '200px', backgroundSize: 'cover', backgroundRepeat: 'repeat'}}>
            <h1 class="mx-auto text-center" style={{color: 'white'}}><strong>Nous Contacter</strong></h1>
        </nav>
        <div class="container mt-5">
            <div class="row justify-content-center">
                <div class="col-md-9 contact-container">
                    <div class="contact-form">
                        <form>
                            <div class="form-group">
                                <label for="name">Nom Prénom </label>
                                <input type="text" class="form-control" id="name" placeholder="Nom Prénom"/>
                            </div>
                            <div class="form-group">
                                <label for="email">Adresse mail </label>
                                <input type="email" class="form-control" id="email" placeholder="exemple@exemple.com"/>
                            </div>
                            <div class="form-group">
                                <label for="message">Message </label>
                                <textarea class="form-control" id="message" rows="5" placeholder="Votre Message"></textarea>
                            </div>
                            <div class="d-flex align-items-center justify-content-center">
                                <button type="submit" class="btn btn-info" style={{backgroundColor: "#324393", color: 'white', fontSize: 'large'}}>Envoyer <i class="fa fa-paper-plane"></i></button>
                            </div>
                            
                        </form>
                    </div>
                </div>
            </div>
        </div>
        
        <br/>
        <br/>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    </div>  
  );
};