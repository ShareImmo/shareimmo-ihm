import React, {useState} from "react";
import './App.css';
import { Link } from "react-router-dom";
import { NavBar } from "./NavBar";
import appar from './images/app.png';

export const Projects = () => {

    const btnStyle = {
        borderRadius: '10px',
    }
    const [board, setBoard] = useState(false);

	const selected ={
		float: 'right', width: '40%', padding: '1%',margin: '1%'
	}

	const unselected = {
		color: '#324393', backgroundColor: 'white', borderColor: '#324393',width: '40%',padding: '1%',float: 'left'
	}
    return (
        <div>
            {/*<NavBar currentPage="projects" />*/}
            <br/><br/>
            <div className="container">
                <div class="d-flex justify-content-center">
                    <div>
                        <button type="button" class={board?"btn btn-custom": "btn btn-primary"} id="bien" style={board ? {unselected} : {selected}} onClick={() => setBoard(false)}> 
                            <h5>Les biens</h5>
                        </button>
                    </div>
                    <div>
                        <button type="button" class={board?"btn btn-primary":"btn btn-custom"} style={!board ? {unselected} : {selected}} onClick={() => setBoard(true)}><h5>Mon tableau de bord</h5></button>
                    </div>
                    <br />
                </div>
            </div>
            <br/><br/>
            {(!board ? (
            <div class="grid-container align-items-center text-center">
                <div class="grid-item">
                    <div class="card" style={{width: '18rem', backgroundColor: 'white'}}>
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
                    <div class="card" style={{width: '18rem', backgroundColor: 'white'}}>
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
                            <Link to="/descriptionBien" class="btn btn-primary" id="cnx">Participer au projet !</Link>
                        </div>
                    </div>
                </div>
                <div class="grid-item">
                    <div class="card" style={{width: '18rem', backgroundColor: 'white'}}>
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
                    <div class="card" style={{width: '18rem', backgroundColor: 'white'}}>
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
            </div>)
			:(<div class="grid-container align-items-center text-center">
                <div class="grid-item">
                    <div class="card" style={{width: '18rem', backgroundColor: 'white'}}>
                        <img src={appar} class="card-img-top align-items-center" alt="bien" />
                        <div class="card-body">
                            <h5 class="card-title">Immeuble Perpignan</h5>
                            <h6 class="card-title">179 000 €</h6>
                            <h6 class="card-title">90 m²</h6>
                            <p class="card-text">Rentabilité brute <strong>7,8 %</strong></p>
                            <br/>
                            <div>
                                <p class="card-text"><strong style={{color:'#424393'}}>Prochain versement bientôt disponible</strong></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="grid-item">
                    <div class="card" style={{width: '18rem', backgroundColor: 'white'}}>
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
                            <p><strong style={{color:'#424393'}}>Le projet est encore en cours de financement</strong></p>
                        </div>
                    </div>
                </div>
		    </div>
			))}
            <br/><br/>
        </div>  
    )    
}