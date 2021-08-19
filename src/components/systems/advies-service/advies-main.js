// GOED STUK

import React, { useState } from 'react';

import ArrowstartSVG from '../../../assets/stap-1-new-balk_tranparant.svg';
import ArrowrestSVG from '../../../assets/stap-2-new-balk_tranparant.svg';

import imgsystem from '../../../images/Systems_Industrie_367x440px.jpg';
import imgsystem2 from '../../../images/Systems_Industrie_367x440px2.jpg';

const tabs = [
  {
    title: 'Advies & verkoop',
    desktopTitle: (props) => (
      <div
        className={`load-current-bar--long-title firstBarDiv ${props.className}`}
      >
        <ArrowstartSVG className='loading-bar firstBar' />
        <a className='link-loading-bar' onClick={props.onClick}>
          <span className='load-current-bar--firstTitle'>
            Advies& <br />
            verkoop
          </span>
        </a>
      </div>
    ),
    content: () => (
      <div className='advies-service-main'>
         <p className='light'>
         Aerial Access heeft een uniek assortiment van permanente toegangsmogelijkheden. 

          </p>
        {/* The h1 is temporarly, when clicking the svg(desktop)/a(mobile) the corresponding text/block should appear */}
        {/* show this block as default, and it is replaced when clicked on a different svg/link */}
        <h1>ADVIES EN VERKOOP</h1>
        <p className='advies-service-content'>
Wij vertegenwoordigen verschillende merken uit binnen- en buitenland. Aerial Access staat neutraal in de markt en wij zullen u onafhankelijk adviseren. Wij bieden deze innovatieve producten aan en geven een gedegen en onderbouwd advies over de toepassing van de juiste systemen en ankerpunten. Op basis van een haalbaarheidsonderzoek en een RI&E (Risico Inventarisatie & Evaluatie) bieden wij u graag een offerte aan voor uw (nieuw-)bouw en on- en offshore installaties. 
<br /><br />
De railsystemen zijn ontworpen om zowel horizontaal als verticaal te kunnen bewegen met touwtechnieken. De rails zijn gemaakt van hoge kwaliteit aluminium. De trolley zijn gemaakt van sterk massief aluminium en vangen de hoge belastingen op en verminderen de wrijving. 
<br /><br />
De gebruikte materialen zijn bestand tegen bijzonder agressieve omstandigheden zoals zeewater, chloor atmosferen of in omgevingen met extreme chemische verontreinigingen. 
De rails zijn te monteren aan alle type structuren zoals bijvoorbeeld staal, beton, metselwerk en systeemsteunen. 
<br /><br />
Naast advies en verkoop bieden wij de montage van de railsystemen, service en onderhoud en training en gebruiksinstructie.  
<br /><br />
<a className="link_contact" href="/contact/">Wij informeren u graag over de mogelijkheden. Neem daarom geheel vrijblijvend contact met ons op. </a>
        </p>
        <ul className='advies-service-content list'>
          <li>{'> '}Deskundig</li>
          <li>{'> '}Diverse systeem mogelijkheden</li>
          <li>{'> '}RI&E</li>
          <li>{'> '}Binnen de architectuur</li>
          <li>{'> '}Op nieuw- en bestaande bouw</li>
          <li>{'> '}Op on- en offshore installaties</li>
          <li>{'> '}In de industrie</li>
        </ul>
      
      </div>
    ),
  },
  {
    title: 'Montage',
    desktopTitle: (props) => (
      <div className={`${props.className}`}>
        <ArrowrestSVG className='loading-bar secondBar' id='testSVG' />
        <a className='link-loading-bar' onClick={props.onClick}>
          <span className='load-current-bar--secondTitle' id='testtitle'>
            Montage
          </span>
        </a>
      </div>
    ),
    content: () => (
      <div className='advies-service-main'>
         <p className='light'>
         Een correcte installatie van ankerpunten en rope access systemen vereist technische kennis en ervaring
          </p>
        {/* The h1 is temporarly, when clicking the svg(desktop)/a(mobile) the corresponding text/block should appear */}
        <h1>MONTAGE</h1>
        <p className='advies-service-content'>
   
Naar aanleiding van de begroting, een ontwerptekening en de risicobeoordeling voeren wij de met u overeengekomen werkzaamheden uit. Wij monteren de systemen volgens de gestelde normen, voeren de eindcontrole uit en ronden de certificering af.
        
        </p>
        <br/>
        <a className="link_contact" href="/contact/">Wij informeren u graag over de mogelijkheden. Neem daarom geheel vrijblijvend contact met ons op. </a>

        <ul className='advies-service-content list'>
        <p className="ons">Wij garanderen:</p>
          <li>{'> '}Technische kennis</li>
          <li>{'> '}Volledig gecertificeerde systemen</li>
          <li>{'> '}Montage specialisten</li>
        </ul>
        
      </div>
    ),
  },
  {
    title: 'service & onderhoud',
    desktopTitle: (props) => (
      <div className={`load-current-bar--long-title ${props.className}`}>
        <ArrowrestSVG className='loading-bar thirdBar' />
        <a className='link-loading-bar' onClick={props.onClick}>
          <span className='load-current-bar--thirdTitle'>
            Service & <br />
            onderhoud
          </span>
        </a>
      </div>
    ),
    content: () => (
      <div className='advies-service-main'>
         <p className='light'>
         Veiligheid door gebruik van Aerial Access Systems wordt gegarandeerd door onze jaarlijkse keuring.
          </p>
        {/* The h1 is temporarly, when clicking the svg(desktop)/a(mobile) the corresponding text/block should appear */}
        <h1>SERVICE EN ONDERHOUD</h1>
        <p className='advies-service-content'>
       
Wetgeving schrijft jaarlijkse keuring en onderhoud van rope access systemen en persoonlijke beschermingsmiddelen voor. Service en onderhoud van de permanente Aerial Access Systems kunnen wij combineren met inspectie en reiniging, onderhoud en reparaties aan uw pand of installatie. 
        </p>
        <br/>
        <a className="link_contact" href="/contact/">Wij informeren u graag over de mogelijkheden. Neem daarom geheel vrijblijvend contact met ons op. </a>

        <ul className='advies-service-content list'>
        <p className="ons">Wij leveren</p>
          <li>{'> '}Jaarlijkse keuringen volgens de gestelde richtlijnen</li>
          <li>{'> '}Onderhoud aan de systemen</li>
          <li>{'> '}Certificering  en inspectierapport</li>
        </ul>
       
      </div>
    ),
  },
  {
    title: 'training',
    desktopTitle: (props) => (
      <div className={`${props.className}`}>
        <ArrowrestSVG className='loading-bar fourthBar' />
        <a className='link-loading-bar' onClick={props.onClick}>
          <span className='load-current-bar--fourthTitle'>Training</span>
        </a>
      </div>
    ),
    content: () => (
      <div className='advies-service-main'>
         <p className='light'>
         Aerial Access biedt trainingen en gebruiksinstructies voor veilig werken met de Aerial Access Systems. Trainingen zijn gericht op gebruik, monteren, repareren of inspecteren van onze systemen.
          </p>
        {/* The h1 is temporarly, when clicking the svg(desktop)/a(mobile) the corresponding text/block should appear */}
        <h1>TRAINING</h1>
        <p className='advies-service-content'>
        <a className="link_contact" href="/contact/">Wij informeren u graag over de mogelijkheden. Neem daarom geheel vrijblijvend contact met ons op. </a>

        </p>
        
        <ul className='advies-service-content list'>
        <p className="ons">Onze trainingen:</p>
          <li>{'> '}Locatie- en systeem gericht;</li>
          <li>{'> '}Aantoonbaar competent.</li>
          <li>{'> '}Kosten besparend</li>
          <li>{'> '}Volledig gecertificeerd</li>
        </ul>
      </div>
    ),
  },
  {
    title: 'project',
    desktopTitle: (props) => (
      <div className={`${props.className}`}>
        <ArrowrestSVG className='loading-bar fifthBar' />
        <a className='link-loading-bar' onClick={props.onClick}>
          <span className='load-current-bar--fifthTitle'>Projects</span>
        </a>
      </div>
    ),
    content: () => (
      
      <div className='advies-service-main'>
          <p className='light'>
            Omdat het een innovatief product is waarbij veel winst is te halen
            is op verschillende vlakken starten we meestal met een haalbaarheid
            onderzoek en een RI&E Risico Inventarisatie & Evaluatie.
          </p>
        {/* The h1 is temporarly, when clicking the svg(desktop)/a(mobile) the corresponding text/block should appear */}
        <h1>PROJECTS</h1>
        <p className='advies-service-content'>
        Ons ervaren en deskundig rope access team kan uw werkzaamheden uitvoeren. Wij zijn getraind en ervaren in het werken met ons Aerial Access Systems. Wij zijn in staat om met meerdere personen tegelijk effectief en efficiënt inspectie, montage of reparatie uit te voeren. Wij hebben ook ervaring bij gevelreiniging en glasbewassing. Ons team verkort doorlooptijden en de omgeving wordt minimaal belast. 
        </p>
        <a className="link_contact" href="/contact/">Wij informeren u graag over de mogelijkheden. Neem daarom geheel vrijblijvend contact met ons op. </a>

        <ul className='advies-service-content list'>

          <li>{'> '}Inspectie</li>
          <li>{'> '}Montage & reparaties</li>
          <li>{'> '}Gevelreiniging en glasbewassing</li>
          <li>{'> '}Onderhoud en montage</li>
          <li>{'> '}Schilderen</li>
          <li>{'> '}Renovatie van monumentale panden</li>
          <li>{'> '}Ondersteuning van de bouw</li>
        </ul>
       
      </div>
    ),
  },
];

const MainPageAdvies = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className='main-page-systems industrie'>
      <div className='container'>
        <div className='content-block-systems advies'>
          <div id='mobile' className='mobile-menu mobile'>
            {/* These are the buttons that should be linked with the corresponding text (mobile)  */}
            {/* Only repalce the block when cliked */}

            {tabs.map(({ title }, index) => (
              <a
                key={`tabsNavi${index}`}
                className='link-loading-bar-mobile'
                onClick={() => setActiveTab(index)}
                href={`#block${index}`}
              >
                <span>{title}</span>
              </a>
            ))}
          </div>

          <div className='load-current-bar mobile-hide'>
            {/* These are the buttons that should be linked with the corresponding text (desktop) */}

            {tabs.map(({ desktopTitle: Title }, index) => (
              <Title
                key={`tabsNaviDesktop${index}`}
                onClick={() => setActiveTab(index)}
                className={activeTab === index ? 'active' : ''}
              />
            ))}
          </div>

          

          {tabs.map(
            ({ content: Content }, index) =>
              activeTab === index && (
                <div key={`tabsContent${index}`} id={`block${index}`}>
                  <Content />
                </div>
              )
          )}
        </div>
        <div className='content-block-systems-2'>
          <img src={imgsystem} alt='' />
          <img src={imgsystem2} alt='' />
          <div className='content-block-systems__buttons'>
            <a href='/systems/producten/'>producten</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainPageAdvies;
