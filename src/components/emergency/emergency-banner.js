import React from 'react';
import SVGWhiteEmergency from '../../images/logo diensten_ERT_wit.svg';

const EmergencyBanner = () => {
  return (
    <section className='banner-page emergency'>
      <div className='banner-page--container container banner-emergency'>
        <img className='banner-page--img emergency' src={SVGWhiteEmergency} alt='' />
        <h1>
          Het Emergency Response Team van Aerial Access staat <br className="mobile-hide" />
voor het leveren van professionele rope rescuespecialisten <br className="mobile-hide" />aan bedrijven en voor hun mensen. 
        </h1>
      </div>
    </section>
  );
};

export default EmergencyBanner;
