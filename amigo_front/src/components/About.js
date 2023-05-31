import React from 'react';
import logo from 'C:/Users/PC/Desktop/AmigoWebsite/amigo_front/src/logo.png';
import { Link } from 'react-router-dom';
//import backAbout from 'C:/Users/PC/Desktop/AmigoWebsite/amigo_front/src/backAbout.jpg';
const About = () => {
  
  return (
    <div>
      <h1>Soyez Amigo,
           partagez le taxi !</h1>
      <h2>Notre Mission</h2>
     <p1>Amigo, une application 100% Tunisienne basée sur le concept « gagnant-gagnant » entre le chauffeur Amigo et le passager, a été créée dans l’objectif de satisfaire les besoins des deux parties en leur permettant de :
        Générer plus de revenus pour les taxis individuels ;
        Faciliter la vie des utilisateurs de taxis en Tunisie.</p1>
     <h1>Notre charte Qualité</h1>
     <p1><h4>On vous offre les meilleurs services pour vous satisfaire :</h4>
        <li>Economie : Minimiser vos tarifs de transport </li>
        <li>Rapidité : Le taxi le plus proche sera à votre disposition en un seul clic</li>
        <li>Sécurité : Toutes les courses sont suivies en temps réel</li>
        </p1>
     <h1>Partagez... C'est mieux !</h1>
     <p1>Amigo est l’application taxi  pionnière sur le marché qui a lancé le premier service des courses partagés en Tunisie visant les objectifs suivants :
         Economiser les coûts du transport ;
         Passer un moment de convivialité durant le trajet.
     </p1>
     <div className="logo">
         <img src={logo} alt="logo"/>
     </div>
     <p1>Partagez le trajet et le coût avec Amigo, l’unique service de Taxi 
       en Tunisie sous le concept de partage de course avec des services de haute qualité qui répondent à vos besoins.
     </p1>
     <h1>About</h1>
     <p1>Notre mission
         Nos normes de haute qualité
         Partagez, c'est mieux!
     </p1>
     <h1>Contact</h1>
     <ul>
     <li>
       <Link to="/">+216 95 436 978</Link>
     </li>
     <li>
       <Link to="/about">contact@getwireless.com.tn</Link>
     </li>
     </ul>
  
 </div>

);
};
export default About;


