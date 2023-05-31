import React from 'react';
import './footer.css';
import logo from 'C:/Users/PC/Desktop/AmigoWebsite/amigo_front/src/logo.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
  
      <form >
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
  
      <p>&copy; 2023 Amigo. All rights reserved.</p>
      </form>
  
  );
};

export default Footer;
