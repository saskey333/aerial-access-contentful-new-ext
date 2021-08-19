import React from 'react';

import SVGWhite from '../../../assets/systems-home.svg';



const ProductenBanner = () => {
  return (
    <section className='banner-page systems producten'>
      <div className='banner-page--container container'>
      <SVGWhite className='banner-page--img' />
        <h1 className="titel-systems">
          Producten
        </h1>
      </div>
    </section>
  );
};

export default ProductenBanner;