import React, { useState } from 'react';

import { BsTelephoneOutbound } from 'react-icons/bs';

function Human() {
  const [mobileNumber, showMobileNumber] = useState(false);

  const handleClick = () => {
    showMobileNumber(true);
  };

  return (
    <>
      {' '}
      <div className='page app__content'>
        <div className='content'>
          <h1 className='title title--medium'>Ma maison</h1>

          <div className='content__inside'>
            <p className='text'>J'habite à la résidence LE TONGA 2, situé rue du Paradou.</p>

            <div className='map'>
              <iframe
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d853.5053541228295!2d5.105042554238461!3d43.330405557942825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12c9deff45960ac3%3A0xbbc032773b4ebd97!2sRue%20du%20Paradou%2C%2013960%20Sausset-les-Pins!5e0!3m2!1sfr!2sfr!4v1685522834027!5m2!1sfr!2sfr'
                allowFullScreen=''
                loading='lazy'
                referrerPolicy='no-referrer-when-downgrade'
                title='Sausset-les-Pins'
                width='100%'
              ></iframe>
            </div>

            {/*
              <p className="text">
                Je suis parfois en weekend à Saâcy sur Marne...
              </p>

              <div className="map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8317.738051563063!2d3.188829364967063!3d48.95472103889019!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9a4ffcf63c1d86f9!2zNDjCsDU3JzE0LjkiTiAzwrAxMScwOC40IkU!5e0!3m2!1sfr!2sfr!4v1653579624418!5m2!1sfr!2sfr"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Saâcy sur Marne"
                  width="100%"
                ></iframe>
              </div>
            */}

            {/*
              <p className='text'>... et parfois en voyage à Annecy, au 15 faubourg des Balmettes.</p>

              <div className='map'>
                <iframe
                  src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2776.759270574365!2d6.12097361473988!3d45.896127512540524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478b8ffec208b79d%3A0x390e4c79c540227b!2s15%20Fbg%20des%20Balmettes%2C%2074000%20Annecy!5e0!3m2!1sfr!2sfr!4v1649756682296!5m2!1sfr!2sfr'
                  allowFullScreen=''
                  loading='lazy'
                  referrerPolicy='no-referrer-when-downgrade'
                  title='15 faubourg des balmettes Annecy'
                  width='100%'
                ></iframe>
              </div>
             */}

            <p className='text'>
              Si vous me trouvez, vous pouvez glisser un SMS ou appeler ma maîtresse, qui sera
              probablement soulagée de savoir que je vais bien ! Voici son numéro de téléphone:
            </p>

            {mobileNumber ? (
              <div className='btn--call'>
                <a href='tel:0033676051735' className='btn btn--medium btn--call'>
                  <BsTelephoneOutbound className='btn__icon' /> 06 76 05 17 35
                </a>
              </div>
            ) : (
              <div>
                <button className='btn btn--medium' onClick={handleClick}>
                  Cliquez pour révéler
                </button>
              </div>
            )}

            <p className='text'>
              Et par mesure de précaution : merci de ne pas m'enfermer la nuit chez vous, même si je
              semble vouloir m'attarder... 🐱
            </p>

            <p className='text'>Un grand merci ! 🐾</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Human;
