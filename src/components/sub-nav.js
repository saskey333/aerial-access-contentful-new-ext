import React from 'react';

const SubNav = () => {
  return (
    <div id='subnav' className='sub-nav'>
      <a href='/systems/bouw-infra/' className='sub-nav--link light'>
        Bouw & infra
      </a>
      <a href='/systems/industrie/' className='sub-nav--link light'>
        Industrie
      </a>
      <a href='/systems/advies-service/' className='sub-nav--link light'>
        Advies & service
      </a>
      <a href='/systems/producten/' className='sub-nav--link light'>
        Producten
      </a>
    </div>
  );
};

export default SubNav;
