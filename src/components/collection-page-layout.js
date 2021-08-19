import React from 'react';
import Navigation from './navigation';
import '../styles/styles.scss';
import Banner from './banner-desktop';
import Footer from './footer';
import ProductenBanner from './systems/producten/producten-banner';
import ProductenPage from './systems/producten/collection';
import CopyrightFooter from './copyright-footer';
import NavMobile from './nav-mobile';
import Phone from '../images/phone.png';
import Email from '../images/email.png';
import CollectionNew from './systems/producten/collection-new';

const StyledLayout = {
  width: '100%',
  minHeight: '100vh',
  margin: '0 auto',
  display: 'grid',
  gridTemplateRows: 'auto 1fr auto',
  gridTemplateColumns: '100%',
};

const LayoutCollectionNew = ({ categories, children }) => {
  return (
    <div style={StyledLayout}>
      <Navigation pageActiveMenu='systems' />
      <NavMobile />
      <Banner />
    
     <CollectionNew />
      <Footer />
      <CopyrightFooter />
      <div className="container-fixed-contact">
      <div className="fixed-mobile-contact mobile">
<a className="phone" href="tel:+31255500392"><img src={Phone} alt="aerial access contact telefoon bellen"/></a>
<hr className="line"/>
<a className="email" href="mailto:info@aerial-access.com"><img src={Email} alt="aerial access contact email"/> </a>
    </div>
    </div>
    </div>
  );
};

export default LayoutCollectionNew;
