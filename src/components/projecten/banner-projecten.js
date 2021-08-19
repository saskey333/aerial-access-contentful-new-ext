import React from 'react';
import SVGWhite from '../../assets/logo-diensen_project.svg';

const BannerPage = () => {
  return (
    <section className='banner-page'>
      <div className='banner-page--container container'>
        <img className='banner-page--img' src={SVGWhite} alt='' />
        <h1>
          Het gebruik van rope access is <br />
          efficiënt en effectief.{' '}
        </h1>
      </div>
    </section>
  );
};

export default BannerPage;
