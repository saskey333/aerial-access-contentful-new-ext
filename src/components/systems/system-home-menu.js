
import React from 'react';

import AerialAccess from '../../images/systems-home2.png';
import HeroMainSystemsAdviesEnService from '../hero-system-advies';
import HeroMainSystemsBouwEnInfra from '../hero-system-bouweninfra';
import HeroMainSystemsProducten from '../hero-system-producten';
import HeroMainSystemsIndustrie from '../hero-system-industrie';

const SystemHomeHero = () => {
  return (
    <section className='hero systems'>
      <div className='container container-systems'>
        <img id="system-home-logo" src={AerialAccess} />

        <div className='hero--main'>
         
          <HeroMainSystemsBouwEnInfra />
          <HeroMainSystemsIndustrie />
          <HeroMainSystemsAdviesEnService />
          <HeroMainSystemsProducten />
        </div>
      </div>
    </section>
  );
};

export default SystemHomeHero;
