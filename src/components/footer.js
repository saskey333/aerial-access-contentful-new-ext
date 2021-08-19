import React from 'react';
import FacebookLogo from '../images/facebook-white.png';
import InstaLogo from '../images/insta-white.png';
import LinkedLogo from '../images/linkedin-white.png';

const Footer = () => {
  return (
    <section className='footer-container'>
      <div className='footer-container-blocks'>
        <div className='footer --col1'>
          <a href="/projecten/">
            <h3>Rope access projects</h3>
          </a>
          <a href="/projecten/">Bouw & Infra Structuur</a>
          <a href="/projecten/">Wind</a>
          <a href="/projecten/">Maritiem</a>
          <a href="/projecten/">Olie & Gas</a>
        </div>
        <div className='footer --col2'>
          <a href='/systems/'>
            <h3>AE SYSTEMS</h3>
          </a>
          <a href="/systems/bouw-infra/">Bouw & Infra Structuur</a>
          <a href="/systems/industrie/">Industrie</a>
          <a href="/systems/advies-service/">Advies & Service</a>
          <br />
          <a href='/systems/producten/'>
            <h3>Producten</h3>
          </a>
          <a href="/systems/producten//">Railsysteem</a>
          <a href="/systems/producten/">Davids- & Deviation Arm</a>
          <a href="/systems/producten/">Ankerpoints</a>
        </div>
        <div className='footer --col3'>
          <a href="/emergency/">
            <h3>Emergency Response Team</h3>
          </a>
          <br />
          <a href="/trainingen/">
            {' '}
            <h3>Trainigen</h3>
          </a>
        </div>
        <div className='footer --col4'>
          <a href="/contact/">
            {' '}
            <h3>Contact</h3>
          </a>
          <a>Trawlerkade 60</a>
          <a>1976 CC IJmuiden</a>
          <a>+31 255500392</a>
          <a href='mailto:info@aerial-access.com'>info@aerial-access.com</a>
          <div className='social-icons footer'>
           <a href="https://www.facebook.com/Aerial-Access-104703344550697/"> <img src={FacebookLogo} alt='' /></a>
           <a href="https://instagram.com/aerial_access_?igshid=1p8xvvrpa0oc5"> <img src={InstaLogo} alt='' /></a>
           <a href="https://www.linkedin.com/in/raymond-burger-8832a91a7/"> <img src={LinkedLogo} alt='' /></a>
          </div>
          <a href="/algemene-voorwaarden/">Algemende voorwaarden</a>
          <a href="/disclaimer/">Disclaimer</a>
          
        </div>
      </div>
    </section>
  );
};

export default Footer;
