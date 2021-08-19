import React from 'react';
import Svg1 from '../images/olieengas1.png';
import Svg2 from '../images/olieengas2.png';
import Svg3 from '../images/windmolen.png';
import Svg4 from '../images/maritiem.png';
import Svg5 from '../images/maritiem2.png';
import Svg6 from '../images/gebouw.png';

const IntroOption = () => {
  const hangleClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -139;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

 

  return (
    <section className='intro-option projects'>
      <div className='intro-option--container container'>
        <div className='intro-option--text'>
          <p>
          Aerial Access kan op moeilijk toegankelijke locaties en op hoogte werkzaamheden uitvoeren. Door het gebruik van touwtechnieken worden tijd en kosten bespaard. Rope access wordt ingezet als gangbare middelen niet toereikend zijn. Het biedt veiligheid, snelheid en heeft een minimale impact op andere werkzaamheden en omgeving. 
          </p>
         
        </div>
        <div className='intro-option--links'>
          <a
            className='introOption'
            onClick={() => hangleClick('8ae985b3-c4de-5140-9836-e6b320f41e2d')}
          >
            Bouw & Infrastructuur
          </a>
          <a
            className='introOption'
            onClick={() => hangleClick('95a8fed2-f08a-5be3-bdaa-ba2ecf7f8708')}
          >
            Wind
          </a>
          <a
            className='introOption'
            onClick={() => hangleClick('ce60a490-56c2-5186-bb1b-6cbb3700271e')}
          >
            Maritiem
          </a>
          <a className='introOption' onClick={() => hangleClick('0894ff6a-6c07-5a5a-9831-803651b4225f')}>
            Olie & Gas
          </a>
        </div>
        <div className="icons-work-project-page">
          <img src={Svg1} alt=""/>
          <img src={Svg2} alt=""/>
          <img src={Svg3} alt=""/>
          <img src={Svg4} alt=""/>
          <img src={Svg5} alt=""/>
          <img src={Svg6} alt=""/>
        
        </div>
      </div>
    </section>
  );
};

export default IntroOption;
