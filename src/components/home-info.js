import React from 'react';
import Logo1 from '../images/GWO_Global_Wind_Organisationpng-e15871185894691.png';
import Logo2 from '../images/header-logo-1.png';
import Logo3 from '../images/opito-logo-1.png';
import Banner from '../images/Homepage_482x526px.jpg';

const HomeInfo = () => {
  return (
    <section className='home-info'>
       <section className="mobile mobile-image-home">
        
            <div className="container">
            <p>
            Door het gebruik van <br/> gespecialiseerde rope access <br/> technieken zijn
            wij in staat <br/> op moeilijke toegankelijke <br/> locaties werkzaamheden <br/> uit
            te voeren.
          </p>
          </div>
          </section>
      <div className='home-info--container container'>
     
        <div>
          <h2 className='h2'>
            Door het gebruik van gespecialiseerde rope access technieken zijn
            wij in staat op moeilijke toegankelijke locaties werkzaamheden uit
            te voeren.
          </h2>
          
          <p>
          Rope access klimtechnieken biedt een veilige, effectieve en efficiënte manier om een werkplek te bereiken. Zo zijn inspecties, onderhoud, schoonmaak- of installatiewerkzaamheden door ons
uitvoerbaar. Wij voeren de werkzaamheden zelfstandig uit of in samenwerking met gespecialiseerde partners.  
 <br /><br />
Bij alle werkzaamheden zorgen wij voor een risicobeoordeling en een zorgvuldige planning. Wij werken volgens internationale richtlijnen van IRATA. 
          </p>
          <div className='home-info--images'>
            <img src={Logo1} alt='' />
            <img src={Logo2} alt='' />
            <img src={Logo3} alt='' />
          </div>
        </div>
        <div>
          <img src={Banner} alt='' />
        </div>
      </div>
    </section>
  );
};

export default HomeInfo;
