import React from 'react';
import HeroMain from './hero-main-component';
import HeroMainSystems from './hero-main-systems';
import HeroMainEmergency from './hero-main-emergency';
import HeroMainTraining from './hero-main-training';

const Hero = () => {
  return (
    <section className='hero'>
      <div className='container'>
        <h1 className='h1 home'>
          Naar welke dienst binnen
          <br className="mobile-hide" /> aerial access bent u opzoek?
        </h1>

        <div className='hero--main'>
          <HeroMain />
          <HeroMainSystems />
          <HeroMainEmergency />
          <HeroMainTraining />
        </div>
      </div>
    </section>
  );
};

export default Hero;
