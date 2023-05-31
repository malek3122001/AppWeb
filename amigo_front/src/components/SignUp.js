import React from 'react';
//<link rel='stylesheet' href='SignUp.css'/>

const SignUp = () => {
  return (
    <div>
      <h1>Devenez chauffeur Amigo</h1>
      <form>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" />

      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" />

      <label htmlFor="message">Message:</label>
      <textarea id="message" name="message"></textarea>

      <button type="submit">submit</button>
      </form>
    </div>
  );
};
export default SignUp;
