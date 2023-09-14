import React,{ useState } from "react";
import './descriptionBien.css';
import apprt1 from './images/app.jpg';
import { Link } from "react-router-dom";

export const DescriptionBien = () => {
    const [nom, setNom] = useState('');
    const [reference, setReference] = useState('');
    const [adresse, setAdresse] = useState('');
    const [adresseComplement, setAdresseComplement] = useState('');
    const [ville, setVille] = useState('');
    const [codePostal, setCodePostal] = useState('');
    const [pays, setPays] = useState('');
    const [description, setDescription] = useState('');
    const [dateAchat, setdateAchat] = useState('');
    const [superficie, setSuperficie] = useState('');
    const [etage, setEtage] = useState('');
    const [nbPieces, setNbPieces] = useState('');
    const [montantAcquisition, setMontantAcquisition] = useState('');

    const btnStyle = {
        borderRadius: '10px',
    }

    const submit = (e) => {
        e.preveventDefault();
    }
    
    return (
        <div className="bienDiv">     
            <br/><br/>
            <div className="container">
                <div class="row align-items-center">
                    <div class="col-md-6">
                        <button type="button" class="btn btn-primary" id="bien" to="/login" style={{float: 'right', width: '40%', padding: '1%',marginRight: '1%'}}> 
                            <h5><Link to="/projects">Les biens</Link></h5>
                        </button>
                    </div>
                    <div class="col-md-6">
                        <button type="button" class="btn btn-custom" style={{color: '#324393', backgroundColor: 'white', borderColor: '#324393',width: '40%',padding: '1%',float: 'left'}}><h5>Mon tableau de bord</h5></button>
                    </div>
                    <br />
                </div>
            </div>
            <br/>
            <div class="container">
                <div class="card">
                    <div class="container-fliud">
                    <div class="wrapper row">
                        <div class="col-md-6">
                        <div id="carouselExampleIndicators" class="carousel slide center" data-bs-ride="carousel">
                            <div class="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>
                            <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src={apprt1} class="d-block w-80" alt="imgBien1" />
                            </div>
                            <div class="carousel-item">
                                <img src={apprt1} class="d-block w-80" alt="imgBien2" />
                            </div>
                            <div class="carousel-item">
                                <img src={apprt1} class="d-block w-80" alt="imgBien3" />
                            </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                        </div>
                        
                        <div class="details col-md-6">
                        <h3 class="product-title">Immeuble Le Mans</h3>
                        <div class="rating">
                            <div class="progress">
                            <div class="progress-bar" role="progressbar" style={{width: '25%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">financement 25%</div>
                            </div>
                            <span class="review-no">41 investisseurs</span>
                        </div>
                        <br/>
                        <h4 class="price">Montant du projet : <span>546 000 €</span></h4>
                        <h4 class="price">Superficie du bien : <span>430 m²</span></h4>
                        <h4 class="price">Rentabilité brute : <span><strong>8,2 %</strong></span></h4>
                        <br/>
                        <br/>
                        <div class="action">
                            <button class="add-to-cart btn btn-default" type="button">Participer au projet </button>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>

            <div class="container">
            <div class="card">
                <div class="container-fliud">
                <div class="wrapper row">
                    <div class="card mb-3">
                    <div class="row g-0">
                        <div class="col-md-12">
                        <div class="card-body">
                            <p class="card-text">A 50 mètres de la gare, immeuble de trois étages comprenant un local commercial libre mais pouvant être loué à 1300 euros/mois (locataire déjà trouvé si besoin), six studios, caves et petit jardin.
                            Exploités en courte durée, les six studios rénovés permettent d'encaisser environ 50 000 euros (40 euros la nuitée et 75% de remplissage).
                            Location meublée à l'année possible également à 500 euros/mois en moyenne pour chacun des six studios = 36 000 euros par an
                            Taxe foncière : 2300 euros/an dont la moitié à facturer au locataire du local commercial.
                            Compteurs par étage donc les loyers s'entendent avec les charges incluses.
                            Revenus assurés pour l'année au minimum 50 000 euros pour l'ensemble.
                            Rendement net minimum à 7,5% en location à l'année et plus en LCD.
                            </p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
    )    
}