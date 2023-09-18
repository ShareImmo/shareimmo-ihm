import React from 'react';
import bg1 from './images/bg1.png';
import fonctionnement from './images/fonctionnement.png';
import obligation from './images/obligation.png';
import { Link } from 'react-router-dom';
//import './cgu.css';

export const Modele = () => {
    return (
        <div class="d" style={{margin: '0px'}}>
            <div class="navbar navbar-expand-lg navbar-light" style={{backgroundImage: `url(${bg1})`, height: '200px', backgroundSize: 'cover', backgroundRepeat: 'repeat', marginTop:'0px'}}>
                <h1 class="mx-auto text-center" style={{color: 'white'}}><strong>Notre Modèle</strong></h1>
            </div>
            <div class="container">
                <br/>
                <br/>
                <div style={{width: '85%',textAlign: 'justify',alignItems:'center', justifyContent: 'center', margin: '0 auto'}}>
                    <br/>
                    <p class="text-center" style={{color: '#324393', fontSize: 'larger'}}>
                        <strong>Notre Modèle : Innover l'Investissement Immobilier grâce à la Tokenisation</strong>
                    </p>
                    <p>Bienvenue chez ShareImmo, où nous réinventons l'investissement immobilier grâce à la puissance de la tokenisation. 
                        Notre modèle repose sur l'idée audacieuse de rendre l'immobilier accessible à tous, en utilisant la technologie 
                        blockchain pour fractionner les biens immobiliers traditionnels en tokens numériques.
                    </p><br/>
                    
                    <img src={fonctionnement} alt="fonctionnement de l'activite" style={{display: 'block', margin: '0 auto', width: '90%'}}/>
                    <br/>
                    <p>ShareImmo simplifie votre parcours d'investissement immobilier en prenant en charge l'ensemble du processus, 
                        de l'acquisition des propriétés à leur gestion administrative et locative. 
                        Vous pouvez ainsi vous concentrer sur l'essentiel : <strong>investir et développer votre portefeuille immobilier.</strong>
                    </p>
                    <p class="text-center" style={{color: '#324393', fontSize: 'larger'}}>
                        <strong>Comment ça fonctionne ?</strong>
                    </p>
                    <p><strong style={{color: '#ff5757'}}>Choisissez Votre Projet :</strong> Parcourez notre sélection de projets immobiliers et choisissez celui qui correspond 
                        le mieux à vos objectifs d'investissement. Vous devenez alors un partenaire financier essentiel de ce projet passionnant.
                    </p>
                    <p><strong style={{color: '#ff5757'}}>Financement Collectif :</strong> Lorsque le financement nécessaire est atteint, ShareImmo crée une société fille SAS 
                        immobilière dédiée exclusivement à la détention du bien immobilier associé au projet. 
                        Cette SAS est ensuite divisée en obligations, et c'est là que votre investissement initial prend tout son sens.
                    </p>
                    <p><strong style={{color: '#ff5757'}}>Possédez des Tokens d'Obligations :</strong> Votre investissement initial se traduit par la détention de tokens d'obligations. 
                        Ces tokens sont proportionnels à votre investissement et représentent votre part de propriété dans la SAS immobilière. 
                        Ils vous accordent des droits précieux, notamment des revenus réguliers provenant des loyers perçus par la SAS.
                    </p>
                    <p><strong style={{color: '#ff5757'}}>Transparence et Tracabilité :</strong> Toutes les opérations, depuis la collecte de fonds jusqu'à la distribution des revenus, 
                        sont minutieusement enregistrées dans la technologie blockchain. Cela garantit une transparence totale et une traçabilité inébranlable. 
                        Vous pouvez à tout moment vérifier l'état de vos investissements et la performance de vos tokens en temps réel.
                    </p>
                    <p class="text-center" style={{color: '#324393', fontSize: 'larger'}}>
                        <strong>Tokens d'obligations</strong>
                    </p>
                    <p>Nos tokens d'obligations offrent une approche unique à l'investissement. 
                        Ils sont indexés sur les loyers générés par les propriétés sous-jacentes.
                        Cela signifie que vous recevez régulièrement des paiements basés sur les revenus locatifs, 
                        créant ainsi un flux de trésorerie stable pour les investisseurs.
                    </p><br/>
                    <img src={obligation} alt="logo" style={{display: 'block', margin: '0 auto', width: '90%'}} />
                    <br/>

                    <p class="text-center" style={{color: '#324393', fontSize: 'larger'}}>
                        <strong>Accompagnement et Innovation Permanente</strong>
                    </p>
                    <p>Notre équipe dévouée est là pour vous guider à chaque étape de votre parcours d'investissement. 
                        Nous mettons à votre disposition des outils, des analyses et des informations pour vous permettre de prendre des décisions éclairées. 
                        De plus, nous restons à la pointe de l'innovation technologique pour améliorer en permanence notre modèle et vous offrir 
                        une expérience exceptionnelle.
                    </p><br/>

                    <p class="text-center" style={{color: '#324393', fontSize: 'larger'}}>
                        <strong>Rejoignez l'Avenir de l'Investissement Immobilier</strong>
                    </p>
                    <p>En choisissant ShareImmo, vous rejoignez une nouvelle ère de l'investissement immobilier. 
                        Notre modèle unique, associé à la nature innovante de nos tokens, vous permet de diversifier votre portefeuille, 
                        de générer un revenu passif et de participer activement à la prise de décisions concernant vos investissements immobiliers.
                    </p><br/>

                    <div style={{textAlign: 'center'}}>
                        <Link to="/projects" class="btn btn-primary">Découvrir les projets</Link>&nbsp;&nbsp;&nbsp;&nbsp;
                        <Link to="/contact" class="btn btn-danger">Nous contacter</Link>
                    </div>
                </div>
                <br/><br/>
            </div>  
            <br/>
        </div>
    );
};

export default Modele;
