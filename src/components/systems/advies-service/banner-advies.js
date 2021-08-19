import React from 'react';

import SVGWhite from '../../../assets/systems-home.svg';


const AdviesBanner = () => {
  return (
    <section className='banner-page systems industrie'>
      <div className='banner-page--container container'>
        <SVGWhite className='banner-page--img' />
        <h1 id='titel-advies' className="titel-systems advies">
          Advies & Service
        </h1>
      </div>
    </section>
  );
};

export default AdviesBanner;