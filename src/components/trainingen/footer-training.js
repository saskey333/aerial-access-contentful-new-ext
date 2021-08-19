import React from 'react';
import ReskLogo from '../../images/resq-logo.png'


const FooterTraining = () => {
return (
<section className='footer-project emergency projects'>
    <div className="container">
        <div className="imagesLogo">
       <img src={ReskLogo} alt=""/> 
       </div>
        <div className="footer-emergency-content">
            <h2>
                Partner
            </h2>
            <p>
            Wil je een van deze trainingen volgen of wil je meer informatie over een cursus?
Neem dan contact op met onze partner in opleidingen.

<br/><br/>
RESQ industry & outdoor behoord tot een van de eerste trainingsbedrijven in Europa met een gecertificeerde ITRA instructeur en examinator. Wij verzorgen verscheidende ITRA programma’s.
<br/><br/>
De International Technical Rescue Association is een wereldwijde non profit organisatie die voorziet in wereldwijde erkenning voor reddingswerkers en instructeurs in een groot aantal verschillende technische reddingsdisciplines. (www.itra.international)
<br /> <br /> 
+31 6 817 183 10; <br/>
info@rope-rescue.nl; <br/>
Bezoekadres: Geyssendorfferweg 47 3088 GJ Rotterdam (alleen op afspraak).</p>
        </div>
        <div></div>
    </div>
</section>
);
};

export default FooterTraining;