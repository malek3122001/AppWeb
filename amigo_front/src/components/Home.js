import React from 'react';
import backAbout from 'C:/Users/PC/Desktop/AmigoWebsite/amigo_front/src/backAbout.jpg';
import Navbar from './Navbar';
import Footer from './Footer';

const Home = () => {
  return (
   
   <div className='back' style={{ backgroundImage: `url(${backAbout})`, backgroundSize: "cover" }}>
  <Navbar/>    
 <from>
    <div>
       <h2>Besoin d'un taxi?</h2>
      <h1>Partagez le taxi,
          Soyez Amigo !</h1>
          <h1>Télécharger Maintenant!</h1>
          <h2>Notre application mobile est disponible sur :</h2>
          
    </div>
    </from>
    <Footer/>

    </div>
  );
};

export default Home;
