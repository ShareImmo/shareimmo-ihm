import React from 'react';
import './accueil.css';
import resizedS from './images/resizedS.png';
import back1 from './images/back1.png';
import choix from './images/choix.png';
import down from './images/down.png';
import euro from './images/euro.png';
import increase from './images/increase.png';
import invSeul from './images/invSeul.png';
import up2 from './images/up2.png';



export const AccueilComponent = () => {


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

  const btnModele = {
    backgroundColor: '#ff5757',
    border: '#ff5757',
    padding: '2%',
  };

  return (  
      <div>
        <br/>
        <br/>
        <div class="container">
          <div class="row align-items-center">
            <div class="col-md-6">
              <div class="text-center">
                <img id="img1" src={back1} alt="img1"/>
              </div>
            </div>
            <div class="col-md-6">
              <div class="text-center" style={width90}>
                <h1 class="Bigtitle1">L'investissement dans l'immobilier tokenisé dès <span class="colored-ff5757">50 €</span></h1>
                <h6 class="Bigtitle1">Revenus locatifs via des <span class="colored-ff5757">obligations</span></h6>
                <p class="colored-324393">Un document d'information synthétique sera transmis à l'AMF avant chaque émission d'obligations</p>
              </div>
            </div>
          </div>
        </div>
        <br/><br/><br/>
        <div class="container">
          <div class="row align-items-center">
            <div class="col-md-6">
              <button type="button" class="btn btn-primary" id="cnx" style={btnCompteStyle}><h5>Créer un compte</h5></button>
            </div>
            <div class="col-md-6">
              <button type="button" class="btn btn-custom" style={btnDemoStyle}><h5>Demander une démo</h5></button>
            </div>
            <br/>
          </div>
        </div>
        <br/>
        <div class="container">
          <div class="row align-items-center">
            <div>
              <p class="colored-324393" style={textCenterStyle}>Investir dans des actions ou obligations présente des risques de perte totale ou partielle des montants investis et des risques d'illiquidité </p>
            </div>
            <br/>
          </div>
        </div>
        <br/><br/><br/>
        <div class="container">
          <div class="row">
            <div class="col-md-6" id="div1">
              <img src={invSeul} alt="investir-seul" style={imgInv} />
              <br/>
              <ul style={color324393} class="align-items-center">
                <li><img src={down} alt="down" style={width3}/> Besoin d'un financement par un organisme de crédit</li>
                <li><img src={down} alt="down" style={width3}/> Démarches administratives lourdes</li>
                <li><img src={down} alt="down" style={width3}/> Les meilleurs opportunités non facilement accessibles</li>
                <li><img src={down} alt="down" style={width3}/> Gestion locative chronophage</li>
                <li><img src={down} alt="down" style={width3}/> Actifs immobiliers illiquides</li>
              </ul>
            </div>
            <div class="col-md-6 shadow-lg rounded" id="div2">
              <img  src={resizedS} alt="Logo ShareImmo" style={logo2}/>
              <ul style={colorWhite} class="align-items-center">
                <li><img src={up2} alt="up" style={width3}/> Investissement en immobilier tokenisé dès 50 €</li>
                <li><img src={up2} alt="up" style={width3}/> Pas de démarches administratives (dossiers, notaires ...)</li>
                <li><img src={up2} alt="up" style={width3}/> Des experts immobiliers pour sélectionner les meilleurs projets</li>
                <li><img src={up2} alt="up" style={width3}/> Liquidité : achat et revente instantanés sur le marché secondaire</li>
                <li><img src={up2} alt="up" style={width3}/> Plus-value potentielle à la revente des biens</li>
              </ul>
            </div>
            <br/>
          </div>
        </div>
        <br/><br/><br/><br/>
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-md-4">
              <div class="card shadow-lg align-items-center text-center" style={padding4}>
                <div class="card-body">
                  <br/>
                  <h5 class="card-title"><i class="fa fa-user-check fa-2x" style={colorff5757}></i></h5>
                  <br/>
                  <h5 class="card-title colored-324393"><strong>Démoctratiser l'investissement immobilier</strong></h5>
                  <p class="card-text colored-324393">en permettant à un large éventail d'investisseurs d'accéder à des biens immobiliers de qualité grâce à la tokenisation</p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card shadow-lg align-items-center text-center" style={padding4}>
                <div class="card-body">
                  <br/>
                  <h5 class="card-title"><i class="fa-solid fa-scale-balanced fa-2x" style={colorff5757}></i></h5>
                  <br/>
                  <h5 class="card-title colored-324393"><strong>Assurer la conformité réglementaire</strong></h5>
                  <br/>
                  <p class="card-text colored-324393">Nos services sont réglementés. Nous veillons à respecter les exigences légales pour garantir la sécurité juridique des investissements</p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card shadow-lg align-items-center text-center"  style={padding4}>
                <div class="card-body">
                  <br/>
                  <h5 class="card-title"><i class="fa-solid fa-cubes fa-2x" style={colorff5757}></i></h5>
                  <br/>
                  <h5 class="card-title colored-324393"><strong>Garantir la transparence et la sécurité des investissements</strong></h5>
                  <p class="card-text colored-324393">Les transactions sont effectuées via la Blockchain qui assure une transparence et sécurité accrue</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br/><br/><br/><br/>
        <div class="shadow-lg" style={divShadow}>
          <div class="row">
            <div class="col-md-6" id="div1" >
              
              <ul style={colorWhite} class="align-items-center">
                <li><img src={euro} alt="euro" style={width10}/>&nbsp;&nbsp; <strong>Investir à partir de 50 €</strong></li>
                <li><img src={increase} alt="increase" style={width10}/>&nbsp;&nbsp; <strong>Rentabilité nette de 6 % à 9 %</strong></li>
                <li><img src={choix} alt="choix" style={width10}/>&nbsp;&nbsp; <strong>Pouvoir décisionnel accessible aux investisseurs</strong></li>
              </ul>

            </div>
            <div class="col-md-6 align-items-center text-center" id="div1">
              <br/>
              <p style={pStyle}>
                <strong>ShareImmo est une plateforme d'investissement dans l'immobilier tokenisé en France.
                L'investisseur perçoit une part du loyer en fonction de ses tokens grâce à la Blockchain.</strong>
                <br/><br/>
                <button type="button" class="btn btn-primary align-items-center text-center" style={btnModele}><strong>Découvrir notre modèle</strong></button>
              </p>
            </div>
            <br/>
          </div>
        </div>
      </div>
  );
};