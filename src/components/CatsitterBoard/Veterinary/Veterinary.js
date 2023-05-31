import React from 'react';

import { BsTelephoneOutbound } from 'react-icons/bs';

import './Veterinary.scss';

function Veterinary() {
  return (
    <>
      {' '}
      <div className='page app__content'>
        <div className='content'>
          <h1 className='title title--medium'>Mon vétérinaire</h1>

          <div className='content__inside'>
            <p className='text'>
              En cas de problème vous pouvez m'amener directement chez mon vétérinaire, à la
              Clinique du Dr. Picandet. Celle-ci se trouve au{' '}
              <span className='bold'>26 Avenue de l'Europe, 13960 Sausset-les-Pins</span> :
            </p>

            <div className='btn--call'>
              <a href='tel:0033450513333' className='btn btn--medium'>
                <BsTelephoneOutbound className='btn__icon' /> 04 42 45 46 60
              </a>
            </div>

            <div className='map'>
              <iframe
                src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11609.229286102816!2d5.1301282!3d43.3287578!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12c9de89b3254f63%3A0x8ab68e8a5b71b5c2!2sClinique%20V%C3%A9t%C3%A9rinaire%20Docteur%20Picandet!5e0!3m2!1sfr!2sfr!4v1685523577165!5m2!1sfr!2sfr'
                allowFullScreen=''
                loading='lazy'
                referrerPolicy='no-referrer-when-downgrade'
                title='Clinique Vétérinaire Docteur Picandet'
                width='100%'
              ></iframe>
            </div>

            <p className='text'>
              Pour votre sécurité et la mienne, je suis vacciné contre la rage, je suis à jour de
              mon traitement antipuce, et je suis doté d'une puce électronique et d'un passeport
              européen.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Veterinary;
