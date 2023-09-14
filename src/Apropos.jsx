import React from 'react';
import './apropos.css';
import { Link } from 'react-router-dom';
import resizedS from './images/resizedS.png';
import wallet from './images/wallet.png';
import notif from './images/notif.png';
import bg1 from './images/bg1.png';



export const Apropos = () => {
  
  const LinkStyle = {
    textDecoration: 'none',
  }

  const colorWhite = {
    color: 'white',
  };

  return (
    <div className='d'>
        <nav class="navbar navbar-expand-lg navbar-light" style={{backgroundImage: `url(${bg1})`, height: '200px', backgroundSize: 'cover', backgroundRepeat: 'repeat'}}>
        <h1 class="mx-auto text-center" style={{color: 'white'}}><strong>A Propos</strong></h1>
        </nav>

        <div className="container">
            <br/>
            <img src={resizedS} alt="logo" style={{display: 'block', margin: '0 auto', width: '40%'}} />
            <br/><br/>
            <div style={{width: '85%', textAlign: 'justify', alignItems:'center', justifyContent: 'center',  margin: '0 auto'}}>
                <p>Nous sommes une équipe passionnée dédiée à la création d'une plateforme innovante dans le domaine de l'immobilier. 
                Notre objectif est de révolutionner l'investissement immobilier en utilisant la technologie blockchain pour 
                offrir des opportunités d'investissement transparentes et accessibles à tous.</p><br/>
                <p>
                Notre plateforme offre une approche transparente, sécurisée et rentable de l'investissement dans l'immobilier. 
                Grâce à la tokenisation, nous divisons les biens immobiliers en fractions numériques appelées tokens, 
                ce qui permet aux investisseurs de perecevoir des revenus mensuels en fonction des parts qu'il possède. 
                Cette révolution de l'investissement immobilier ouvre de nouvelles opportunités pour les investisseurs, 
                qu'ils soient novices ou expérimentés.
                </p><br/>
                <p>
                La sécurité est au cœur de notre plateforme. 
                En utilisant la technologie blockchain, chaque transaction est enregistrée de manière immuable et chaque token est protégé 
                par des contrats intelligents sécurisés. Cela garantit que vos investissements sont en sécurité et que chaque transaction 
                est transparente.
                </p><br/>
                <p>
                Nous nous engageons à offrir une expérience utilisateur exceptionnelle. 
                Notre équipe de professionnels dévoués travaille sans relâche pour s'assurer que vous avez accès à toutes les informations 
                nécessaires pour prendre des décisions éclairées. 
                Nous proposons également une gamme d'outils et de ressources pour vous aider à gérer votre portefeuille immobilier numérique.
                </p><br/>

                <p>Notre équipe se compose d'experts chevronnés dans les domaines de la blockchain, de l'immobilier et de la finance. 
                Nous croyons fermement que l'avenir de l'investissement immobilier réside dans la décentralisation et la tokenisation, 
                et nous travaillons sans relâche pour concrétiser cette vision.
                </p><br/>

                <p>
                Nous sommes fiers de révolutionner l'industrie immobilière en la rendant plus accessible, transparente et efficiente pour tous.
                Rejoignez-nous dès aujourd'hui pour découvrir l'avenir passionnant de l'investissement immobilier. 
                </p><br/>
                <p class="text-center" style={{color: '#ff5757', fontSize: 'larger'}}>
                <strong>Bienvenue dans le monde de la tokenisation immobilière !</strong>
                </p><br/>

                <p>Si vous souhaitez en savoir plus sur notre plateforme ou si vous avez des questions, n'hésitez pas à nous contacter. 
                Nous serions ravis de vous parler de notre projet et de répondre à toutes vos interrogations.
                </p><br/>

                <div style={{textAlign: 'center'}}>
                    <Link to="/modele" class="btn btn-primary">En savoir plus</Link>&nbsp;&nbsp;&nbsp;&nbsp;
                    <Link to="/contact#" class="btn btn-danger">Contactez-nous</Link>
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