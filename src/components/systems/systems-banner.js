import React from 'react';
import SVGWhite from '../../assets/systems-home.svg';


const SystemBanner = () => {
  return (
    <section className='banner-page systems'>
      <div className='banner-page--container container'>
        <SVGWhite className='banner-page--img' />
        <h1 className="titel-systems">
          Bouw & Infra
        </h1>
      </div>
    </section>
  );
};

export default SystemBanner;
