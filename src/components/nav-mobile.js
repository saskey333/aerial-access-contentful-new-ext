import React, { useState } from 'react';

import MobileNavPng from '../images/mobilenav.png';
import MobileNavClose from './../assets/mobile-nav-cross.svg';

const NavMobile = () => {
  const [isOpen, setMenuOpen] = useState(false);

  return (
    <>
      <button className='mobile-menu-btn' onClick={() => setMenuOpen(!isOpen)}>
        {isOpen ? (
          <MobileNavClose className='mobile-nav' />
        ) : (
          <img className='mobile-nav' src={MobileNavPng} />
        )}
      </button>
      {isOpen ? (
        <section className='nav-container-mobile mobile'>
          <div>
            <a href='/projecten/' className='orange-nav'>
              ROPE ACCESS PROJECT
            </a>
            <hr />

            <a href="/systems/"><h2>AERIAL ACCESS SYSTEM</h2></a>
            <a href='/systems/bouw-infra/'>Bouw & infra structuur</a>
            <a href='/systems/industrie/'>Industrie</a>
            <a href='/systems/advies-service/'>Advies & service</a>
            <a href='/systems/producten/'>Producten</a>
            <hr />
            <a href='/emergency/' className='orange-nav'>
              Emergency responseteam
            </a>
            <hr />
            <a href='/trainingen/' className='orange-nav'>
              Aerial access training
            </a>
            <hr />
            <a href='/over-ons/' className='orange-nav'>
              Over ons
            </a>
            <hr />
            <a href='/contact/' className='orange-nav'>
              Contact
            </a>
            <hr />
          </div>
        </section>
      ) : (
        <></>
      )}
    </>
  );
};

export default NavMobile;
