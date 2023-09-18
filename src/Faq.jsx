import React from 'react';
import bg1 from './images/bg1.png';
import fonctionnement from './images/fonctionnement.png';
import obligation from './images/obligation.png';
import { Link } from 'react-router-dom';
//import './cgu.css';

export const Faq = () => {
    return (
        <div class="d" style={{margin: '0px'}}>
            <div class="navbar navbar-expand-lg navbar-light" style={{backgroundImage: `url(${bg1})`, height: '200px', backgroundSize: 'cover', backgroundRepeat: 'repeat', marginTop:'0px'}}>
                <h1 class="mx-auto text-center" style={{color: 'white'}}><strong>FAQ.</strong></h1>
            </div>
            <div style={{width: '80%', margin: '0 auto'}}>
            <br/>
            <section>
                <div class="row">
                    <div class="col-md-12 mb-4 shadow-sm p-3 mb-5 bg-body rounded">
                        <h5 class="mb-3" style={{color: '#ff5757'}}><i class="fas fa-star"></i>&nbsp;&nbsp;
                            Qu'est-ce que ShareImmo ?</h5>
                        <p style={{color:'#324393'}}>
                            ShareImmo est une plateforme d'investissement immobilier innovante qui permet aux 
                            investisseurs de participer au financement de projets immobiliers passionnants. 
                            Nous créons des sociétés filles (SAS immobilières) dédiées à la détention de biens 
                            immobiliers et divisons ces sociétés en obligations, offrant ainsi aux investisseurs 
                            une opportunité unique d'investir dans l'immobilier.
                        </p>
                    </div>
                
                    <div class="col-md-12 mb-4 shadow-sm p-3 mb-5 bg-body rounded">
                        <h5 class="mb-3" style={{color: '#ff5757'}}><i class="fas fa-star"></i>&nbsp;&nbsp;
                            Comment puis-je investir avec ShareImmo ?</h5>
                        <p style={{color:'#324393'}}>
                            C'est simple ! Parcourez notre sélection de projets immobiliers, choisissez celui 
                            qui correspond à vos objectifs d'investissement, puis investissez dans ce projet en 
                            achetant des tokens d'obligations correspondants à votre investissement. 
                            Vous aurez ainsi droit à des revenus réguliers issus des loyers perçus.
                        </p>
                    </div>
                
                    <div class="col-md-12 mb-4 shadow-sm p-3 mb-5 bg-body rounded">
                        <h5 class="mb-3" style={{color: '#ff5757'}}><i class="fas fa-star"></i>&nbsp;&nbsp;
                            Quels sont les avantages d'investir avec ShareImmo ?</h5>
                        <p style={{color:'#324393'}}>
                            Investir avec ShareImmo présente plusieurs avantages. 
                            Vous pouvez diversifier votre portefeuille immobilier sans avoir à gérer activement les biens. 
                            Les tokens d'obligations que vous détenez vous donnent droit à des revenus réguliers provenant 
                            des loyers perçus par la SAS immobilière.
                        </p>
                    </div>

                    <div class="col-md-12 mb-4 shadow-sm p-3 mb-5 bg-body rounded">
                        <h5 class="mb-3" style={{color: '#ff5757'}}><i class="fas fa-star"></i>&nbsp;&nbsp;
                            Comment fonctionne la répartition des revenus des loyers ?</h5>
                        <p style={{color:'#324393'}}>
                            Les revenus des loyers perçus par la SAS immobilière sont proportionnellement répartis 
                            entre les détenteurs de tokens d'obligations en fonction de leur investissement initial. 
                            Plus vous investissez, plus votre part des revenus est importante.
                        </p>
                    </div>

                    <div class="col-md-12 mb-4 shadow-sm p-3 mb-5 bg-body rounded">
                        <h5 class="mb-3" style={{color: '#ff5757'}}><i class="fas fa-star"></i>&nbsp;&nbsp;
                            Quelle est la sécurité de mon investissement ?</h5>
                        <p style={{color:'#324393'}}>
                            La sécurité de votre investissement est une priorité pour ShareImmo. 
                            Toutes les transactions sont enregistrées dans la blockchain, garantissant 
                            ainsi la transparence et la traçabilité.
                        </p>
                    </div>

                    <div class="col-md-12 mb-4 shadow-sm p-3 mb-5 bg-body rounded">
                        <h5 class="mb-3" style={{color: '#ff5757'}}><i class="fas fa-star"></i>&nbsp;&nbsp;
                            Puis-je revendre mes tokens d'obligations ?</h5>
                        <p style={{color:'#324393'}}>
                            Oui, vous avez la possibilité de revendre vos tokens d'obligations sur notre plateforme d'échange (Market Place). 
                            Cependant, il est important de noter que la liquidité peut varier en fonction de la demande du marché.
                        </p>
                    </div>

                    <div class="col-md-12 mb-4 shadow-sm p-3 mb-5 bg-body rounded">
                        <h5 class="mb-3" style={{color: '#ff5757'}}><i class="fas fa-star"></i>&nbsp;&nbsp;
                            Comment puis-je suivre les performances de mon investissement ?</h5>
                        <p style={{color:'#324393'}}>
                            ous pouvez suivre les performances de votre investissement en accédant à votre compte ShareImmo. 
                            Vous y trouverez des informations sur les revenus générés, les annonces de projets, et d'autres données pertinentes.
                        </p>
                    </div>

                    <div class="col-md-12 mb-4 shadow-sm p-3 mb-5 bg-body rounded">
                        <h5 class="mb-3" style={{color: '#ff5757'}}><i class="fas fa-star"></i>&nbsp;&nbsp;
                            Y a-t-il des frais associés à l'investissement ?</h5>
                        <p style={{color:'#324393'}}>
                            Oui, il peut y avoir des frais d'investissement associés à l'achat de tokens d'obligations, 
                            ainsi que des frais de revente de ces tokens. Les détails spécifiques des frais sont disponibles sur notre plateforme.
                        </p>
                    </div>

                    <div class="col-md-12 mb-4 shadow-sm p-3 mb-5 bg-body rounded">
                        <h5 class="mb-3" style={{color: '#ff5757'}}><i class="fas fa-star"></i>&nbsp;&nbsp;
                            Quels types de projets immobiliers sont disponibles sur ShareImmo ?</h5>
                        <p style={{color:'#324393'}}>
                            Nous souhaitons nous focaliser sur l’immobilier résidentiel car c’est un marché plus large, plus stable 
                            (moins sujet à des impacts négatifs comme celui de la crise COVID pour l'immobilier de bureaux). C’est aussi lié à une volonté 
                            de rendre l'investissement plus compréhensible et concret pour nos clients.
                            Vous pouvez explorer notre sélection pour trouver le projet qui correspond le mieux à vos préférences.
                        </p>
                    </div>

                    <div class="col-md-12 mb-4 shadow-sm p-3 mb-5 bg-body rounded">
                        <h5 class="mb-3" style={{color: '#ff5757'}}><i class="fas fa-star"></i>&nbsp;&nbsp;
                            Qu’est-ce qu’un jeton “token” ? Qu’est-ce que la tokenisation ?</h5>
                        <p style={{color:'#324393'}}>
                            Un jeton, ou "token" en anglais, est une représentation numérique d'un actif ou d'un droit sur une blockchain. 
                            La tokenisation est le processus de conversion d'actifs physiques, tels que des biens immobiliers, 
                            en tokens numériques sur une blockchain. Ces tokens peuvent être ensuite échangés, détenus ou utilisés comme 
                            preuve de propriété.
                        </p>
                    </div>

                    <div class="col-md-12 mb-4 shadow-sm p-3 mb-5 bg-body rounded">
                        <h5 class="mb-3" style={{color: '#ff5757'}}><i class="fas fa-star"></i>&nbsp;&nbsp;
                            ShareImmo est-elle une SCPI ?</h5>
                        <p style={{color:'#324393'}}>
                            Non, ShareImmo n'est pas une SCPI (Société Civile de Placement Immobilier). ShareImmo est une plateforme de 
                            tokenisation immobilière qui permet aux investisseurs d'acquérir des tokens représentant des parts dans des 
                            SAS immobilières dédiées à la détention de biens immobiliers.
                        </p>
                    </div>

                    <div class="col-md-12 mb-4 shadow-sm p-3 mb-5 bg-body rounded">
                        <h5 class="mb-3" style={{color: '#ff5757'}}><i class="fas fa-star"></i>&nbsp;&nbsp;
                            Que se passe-t-il si ShareImmo fait faillite ?</h5>
                        <p style={{color:'#324393'}}>
                            En cas de faillite de ShareImmo, les SAS immobilières créées pour chaque projet continueront à fonctionner 
                            de manière indépendante. Les investisseurs détiendront toujours leurs tokens d'obligations et continueront 
                            à percevoir des revenus réguliers provenant des loyers perçus par la SAS immobilière.
                        </p>
                    </div>

                    <div class="col-md-12 mb-4 shadow-sm p-3 mb-5 bg-body rounded">
                        <h5 class="mb-3" style={{color: '#ff5757'}}><i class="fas fa-star"></i>&nbsp;&nbsp;
                            Quel est le ticket minimum d’investissement ?</h5>
                        <p style={{color:'#324393'}}>
                            Vous pouvez investir à partir de 50 €.
                        </p>
                    </div>

                    <div class="col-md-12 mb-4 shadow-sm p-3 mb-5 bg-body rounded">
                        <h5 class="mb-3" style={{color: '#ff5757'}}><i class="fas fa-star"></i>&nbsp;&nbsp;
                            Comment évolue le prix d’un token ?</h5>
                        <p style={{color:'#324393'}}>
                            Le prix d'un token peut évoluer en fonction de l'offre et de la demande sur notre marché secondaire (Market Place). 
                            Cependant, il peut également être influencé par des facteurs tels que la performance financière de la SAS immobilière 
                            et les revenus générés par les biens immobiliers.
                        </p>
                    </div>

                    <div class="col-md-12 mb-4 shadow-sm p-3 mb-5 bg-body rounded">
                        <h5 class="mb-3" style={{color: '#ff5757'}}><i class="fas fa-star"></i>&nbsp;&nbsp;
                            À quelle fréquence reçois-je mes dividendes ?</h5>
                        <p style={{color:'#324393'}}>
                            Les dividendes sont distribués de manière régulière chaque mois. 
                        </p>
                    </div>

                    <div class="col-md-12 mb-4 shadow-sm p-3 mb-5 bg-body rounded">
                        <h5 class="mb-3" style={{color: '#ff5757'}}><i class="fas fa-star"></i>&nbsp;&nbsp;
                            Que se passe-t-il si une levée de fonds n'a pas atteint le montant requis avant sa date finale ?</h5>
                        <p style={{color:'#324393'}}>
                            Si une levée de fonds sur ShareImmo ne parvient pas à atteindre le montant requis avant la date limite fixée, 
                            les investisseurs ne seront pas engagés dans cet investissement spécifique. Les fonds collectés pour ce projet particulier 
                            seront totalement retournés aux investisseurs. ShareImmo veille à ce que les projets ne soient financés que s'ils atteignent 
                            leur objectif de levée de fonds, offrant ainsi une plus grande sécurité aux investisseurs.
                        </p>
                    </div>

                    <div class="col-md-12 mb-4 shadow-sm p-3 mb-5 bg-body rounded">
                        <h5 class="mb-3" style={{color: '#ff5757'}}><i class="fas fa-star"></i>&nbsp;&nbsp;
                            Quelle est la durée de financement d'un projet ?</h5>
                        <p style={{color:'#324393'}}>
                            En général, la durée de financement est de 2 mois. Cependant, cela peut varier selon la nature du projet et de son montant. 
                            Les informations spécifiques à chaque projet seront annoncer dans la page dédiée du projet.
                        </p>
                    </div>
                </div>
            </section>
        </div> 
            <br/>
        </div>
    );
};

export default Faq;
