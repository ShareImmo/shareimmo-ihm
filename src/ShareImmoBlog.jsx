import React from 'react';
import './accueil.css';
import bg1 from './images/bg1.png';

const ShareImmoBlog = () => {

  const titleStyle = {
    fontSize: '36px',
    color: '#FF5757',
  };

  const subtitleStyle = {
    fontSize: '24px',
    color: '#324393',
	fontWeight: 'bold',
  };

  const subsubtitleStyle = {
    fontSize: '20px',
    color: '#FF5757',
  };

  const paraStyle = {
    fontSize: '18px',
    color: '#000000',
  };

  return (
	<div>
		<nav class="navbar navbar-expand-lg navbar-light" style={{backgroundImage: `url(${bg1})`, height: '200px', backgroundSize: 'cover', backgroundRepeat: 'repeat'}}>
        <h1 class="mx-auto text-center" style={{color: 'white'}}><strong>ShareImmo Blog</strong></h1>
        </nav>
    <div style={{width: '55%', textAlign: 'justify', alignItems:'center', justifyContent: 'center',  margin: '0 auto'}} className="blog-article">
      <h1 style={titleStyle}>Découvrez les Avantages Révolutionnaires de l'Immobilier Tokénisé avec ShareImmo</h1>
      
	  <p style={paraStyle}>
		Bonjour à tous et bienvenue sur le blog de ShareImmo ! Aujourd'hui, nous allons explorer un sujet passionnant et innovant qui a le potentiel de transformer votre expérience d'investissement immobilier : l'immobilier tokénisé. Vous vous demandez peut-être ce que c'est et pourquoi cela devrait vous intéresser ? Restez avec nous pour découvrir pourquoi cette révolution pourrait bien être ce que vous attendiez.
	  </p>

      <h2 style={subtitleStyle}>Qu'est-ce que la tokénisation immobilière ?</h2>
      <p style={paraStyle}>
	  Imaginez pouvoir investir dans un appartement en plein cœur de Paris, un complexe commercial aux États-Unis ou même un hôtel exotique aux Maldives, et tout cela sans avoir à débourser des sommes astronomiques ou à vous enliser dans des formalités administratives interminables. C'est exactement ce que permet l'immobilier tokénisé. Grâce à la technologie blockchain, chaque bien immobilier peut être divisé en tokens, ou jetons numériques, qui peuvent être achetés par des investisseurs. Chaque token représente une fraction de la propriété du bien, ce qui permet d'ouvrir la voie à un investissement plus accessible.
      </p>

      <h2 style={subtitleStyle}>Les Avantages Clés</h2>
	  <h3 style={subsubtitleStyle}>Accessibilité et Diversification</h3>
	  <p style={paraStyle}>
	  L'un des principaux avantages de l'immobilier tokénisé est qu'il rend l'investissement immobilier accessible à tous, quel que soit leur budget. Vous pouvez acheter des tokens pour aussi peu que quelques centaines ou milliers d'euros, vous permettant d'investir dans des biens que vous n'auriez jamais pu vous permettre autrement.
	  </p>
	  <p style={paraStyle}>
	  De plus, cela vous donne la possibilité de diversifier votre portefeuille en investissant dans différentes propriétés ou même différents types de biens immobiliers. Vous n'êtes pas limité par la géographie ou le type de propriété, ce qui réduit votre risque global.
	  </p>
	  <h3 style={subsubtitleStyle}>Liquidité Augmentée</h3>
	  <p style={paraStyle}>
	  Les actifs immobiliers sont souvent critiqués pour leur manque de liquidité. Avec l'immobilier tokénisé, ce problème est largement atténué. Vous pouvez vendre vos tokens à tout moment sur une plateforme d'échange, sans avoir à attendre que quelqu'un achète l'ensemble de la propriété.
	  </p>
	  <h3 style={subsubtitleStyle}>Transparence et Sécurité</h3>
	  <p style={paraStyle}>
	  La blockchain est connue pour sa transparence et sa sécurité. Toutes les transactions sont enregistrées de manière transparente, ce qui réduit le risque de fraude. De plus, le recours à des smart contracts automatise et sécurise encore davantage le processus d'achat, de gestion et de vente.	  </p>
	  <h3 style={subsubtitleStyle}>Coûts Réduits</h3>
	  <p style={paraStyle}>
	  Les coûts de transaction et les frais associés à l'achat et à la vente d'un bien immobilier peuvent rapidement s'accumuler. Avec l'immobilier tokénisé, ces coûts sont considérablement réduits, car il n'y a pas besoin de passer par de multiples intermédiaires comme des agents immobiliers, des notaires, etc.	  </p>

      <h2 style={subtitleStyle}>Pourquoi ShareImmo ?</h2>
      <p style={paraStyle}>
	  Chez ShareImmo, nous sommes passionnés par les possibilités offertes par l'immobilier tokénisé. Nous vous fournissons une plateforme simple et sécurisée pour investir dans des propriétés de qualité partout en France. Avec notre expertise et notre engagement envers la transparence, nous sommes là pour vous guider à chaque étape de votre voyage d'investissement.
	  </p>
	  <p style={paraStyle}>
	  N'attendez plus pour rejoindre cette révolution de l'investissement immobilier. Restez à l'écoute pour plus d'articles informatifs et découvrez comment ShareImmo peut vous aider à tirer le meilleur parti de l'immobilier tokénisé.
	  </p>
	  <br/><br/>
	  Si vous avez des questions ou souhaitez en savoir plus, n'hésitez pas à nous contacter. Merci de nous avoir lu et à bientôt pour d'autres découvertes passionnantes dans le monde de l'immobilier tokénisé avec ShareImmo !
    </div>
	</div>
  );
};

export default ShareImmoBlog;