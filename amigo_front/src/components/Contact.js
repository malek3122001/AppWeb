import React from 'react';

const Contact = () => {
  return (
    
    <div>
      <h1>N'hésitez pas à nous contacter</h1>
      <h2>Contactez-nous</h2>
      <form>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" />

      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" />

      <label htmlFor="message">Message:</label>
      <textarea id="message" name="message"></textarea>

      <button type="submit">submit</button>
      </form>
      <h1>Commencez l'aventure maintenant!!</h1>  
    </div>
  );
};
export default Contact;
   
