import React from "react";
import './App.css';
import appar from './images/app.jpg';

export const Projects = () => {

    return (
        <div>
            {/*<NavBar currentPage="projects" />*/}
            <br/><br/>
            <div className="container">
                <div class="row align-items-center">
                    <div class="col-md-6">
                        <button type="button" class="btn btn-primary" id="bien" style={{float: 'right', width: '40%', padding: '1%',marginRight: '1%'}}> 
                            <h5>Les biens</h5>
                        </button>
                    </div>
                    <div class="col-md-6">
                        <button type="button" class="btn btn-custom" style={{color: '#324393', backgroundColor: 'white', borderColor: '#324393',width: '40%',padding: '1%',float: 'left'}}><h5>Mon tableau de bord</h5></button>
                    </div>
                    <br />
                </div>
            </div>
            <br/><br/>
            <div class="grid-container align-items-center text-center">
                <div class="grid-item">
                    <div class="card" style={{width: '18rem'}}>
                        <img src={appar} class="card-img-top align-items-center" alt="bien" />
                        <div class="card-body">
                            <h5 class="card-title">Immeuble Perpignan</h5>
                            <h6 class="card-title">179 000 €</h6>
                            <h6 class="card-title">90 m²</h6>
                            <p class="card-text">Rentabilité brute <strong>7,8 %</strong></p>
                            <br/>
                            <div class="progress">
                                <div class="progress-bar" role="progressbar" style={{width: '100%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">financement 100%</div>
                            </div>
                            <br/>
                            <p class="card-text">Financé par <strong>4000</strong> investisseurs</p>
                        </div>
                    </div>
                </div>
                <div class="grid-item">
                    <div class="card" style={{width: '18rem'}}>
                        <img src={appar} class="card-img-top" alt="bien" />
                        <div class="card-body">
                            <h5 class="card-title">Immeuble Le Mans</h5>
                            <h6 class="card-title">546 000 €</h6>
                            <h6 class="card-title">430 m²</h6>
                            <p class="card-text">Rentabilité brute <strong>8,2 %</strong></p>
                            <div class="progress">
                                <div class="progress-bar" role="progressbar" style={{width: '25%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">financement 25%</div>
                            </div>
                            <br />
                            <a href="/" class="btn btn-primary" id="cnx">Participer au projet !</a>
                        </div>
                    </div>
                </div>
                <div class="grid-item">
                    <div class="card" style={{width: '18rem'}}>
                        <img src={appar} class="card-img-top" alt="bien" />
                        <div class="card-body">
                            <h5 class="card-title">Immeuble Le Mans</h5>
                            <h6 class="card-title">546 000 €</h6>
                            <h6 class="card-title">430 m²</h6>
                            <p class="card-text">Rentabilité brute <strong>8,2 %</strong></p>
                            <div class="progress">
                                <div class="progress-bar" role="progressbar" style={{width: '25%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">financement 25%</div>
                            </div>
                            <br />
                            <a href="/" class="btn btn-primary" id="cnx">Participer au projet !</a>
                        </div>
                    </div>
                </div>
                <div class="grid-item">
                    <div class="card" style={{width: '18rem'}}>
                        <img src={appar} class="card-img-top" alt="bien" />
                        <div class="card-body">
                            <h5 class="card-title">Immeuble Le Mans</h5>
                            <h6 class="card-title">546 000 €</h6>
                            <h6 class="card-title">430 m²</h6>
                            <p class="card-text">Rentabilité brute <strong>8,2 %</strong></p>
                            <div class="progress">
                                <div class="progress-bar" role="progressbar" style={{width: '25%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">financement 25%</div>
                            </div>
                            <br />
                            <a href="/" class="btn btn-primary" id="cnx">Participer au projet !</a>
                        </div>
                    </div>
                </div>
                <div class="grid-item">
                    <div class="card" style={{width: '18rem'}}>
                        <img src={appar} class="card-img-top" alt="bien" />
                        <div class="card-body">
                            <h5 class="card-title">Immeuble Le Mans</h5>
                            <h6 class="card-title">546 000 €</h6>
                            <h6 class="card-title">430 m²</h6>
                            <p class="card-text">Rentabilité brute <strong>8,2 %</strong></p>
                            <div class="progress">
                                <div class="progress-bar" role="progressbar" style={{width: '25%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">financement 25%</div>
                            </div>
                            <br />
                            <a href="/" class="btn btn-primary" id="cnx">Participer au projet !</a>
                        </div>
                    </div>
                </div>
                <div class="grid-item">
                    <div class="card" style={{width: '18rem'}}>
                        <img src={appar} class="card-img-top" alt="bien" />
                        <div class="card-body">
                            <h5 class="card-title">Immeuble Le Mans</h5>
                            <h6 class="card-title">546 000 €</h6>
                            <h6 class="card-title">430 m²</h6>
                            <p class="card-text">Rentabilité brute <strong>8,2 %</strong></p>
                            <div class="progress">
                                <div class="progress-bar" role="progressbar" style={{width: '25%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">financement 25%</div>
                            </div>
                            <br />
                            <a href="/" class="btn btn-primary" id="cnx">Participer au projet !</a>
                        </div>
                    </div>
                </div>
            </div>
            <br/><br/>
        </div>        
        
    )    
}