import React, { useState, useMemo, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import * as PropTypes from 'prop-types';

import './style.scss';

//envoi des données du formulaire

function Contact({ contact }) {
  const {register, handleSubmit, reset} = useForm({
    defaultValues: useMemo(() => ({
      fname: contact?.fname,
      lname: contact?.lname,
      email: contact?.email,
      phone: contact?.phone,
      object: contact?.object,
      message: contact?.message,
    }), [contact]),
  });
  useEffect(() => {
    reset(contact);
  }, [contact]);

  const onSubmit = async (data) => {
    const dataJSON = JSON.stringify(data);
    await fetch("http://localhost:4000/api/contacts", {
        method: "post",
        headers: {
          'Content-Type': 'application/json'
        },
        body: dataJSON,
    })
    .then((data) => {
      if (data.error)
        alert("Message non envoyé !")
      else
        alert("Message envoyé !")
    })
  };

  return (
    <div id="contact" className='contact'>
      <div className='contactForm'>
        <h2>Contact</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="fieldset">
            <div className="inputLeft">
              <label htmlFor="fname">Nom :</label>
              <input type="text" id="fname" name="fname" {...register('fname')} required></input>
            </div> 
            <div className="inputRight">
              <label htmlFor="lname">Prénom :</label>
              <input type="text" id="lname" name="lname" {...register('lname')} required></input>
            </div>
            <div className="inputLeft">
              <label htmlFor="email">E-mail :</label>
              <input type="email" id="email" name="email" {...register('email')} required></input>
            </div>
            <div className="inputRight">
              <label htmlFor="phone">Téléphone :</label>
              <input type="phone" id="phone" name="phone" {...register('phone')} required></input>
            </div>
            <div className="input">
              <label htmlFor="object">Objet :</label>
              <input type="text" id="object" name="object" {...register('object')} required></input>
            </div>
            <div className="input">
              <label htmlFor="message">Message :</label>
              <textarea rows="8" cols="65" id="message" name="message" {...register('message')} placeholder="" required></textarea>
            </div>
            <input type="submit" value="Envoyer"></input>
          </div>
        </form>
      </div>
    </div>
  );
}

Contact.propTypes = {
  contact: PropTypes.shape({
    fname: PropTypes.string,
    lname: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
    object: PropTypes.string,
    message: PropTypes.string,
  }),
  validate: PropTypes.func,
};

Contact.defaultProps = {
  contact: null,
  validate: null,
};

export default Contact