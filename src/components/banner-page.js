import React from 'react';
import SVGWhite from '../images/project-logogood.png';

const BannerPage = () => {
  return (
    <section className='banner-page project'>
      <div className='banner-page--container container'>
        <img className='banner-page--img' src={SVGWhite} alt='' />
        <h1 className="titelMobileProjects">
          Het gebruik van rope access is <br />
          efficiënt en effectief.
        </h1>
      </div>
    </section>
  );
};

export default BannerPage;
