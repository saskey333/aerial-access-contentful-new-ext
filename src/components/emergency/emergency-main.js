import React from 'react';
import image1 from '../../images/Emergency responce team_367x440px.jpg';
import image2 from '../../images/Emergency responce team_367x440px2.jpg';

const EmergencyMain = () => {
return (
<section className='emergency-main-page'>
    <div className="container">
        <div className="emergency-content">
            <h2>Ons reddingsteam bestaat uit goed opgeleide en gecertificeerde technici die slachtoffers op moeilijk toegankelijke plaatsen kunnen bereiken, stabiliseren en naar een veilige locatie brengen.  </h2>
            <p>
            Als aanvulling op de bestaande BHV teams van het bedrijf kunnen wij reddingen uitvoeren op hoogte, diepte en in besloten ruimten. Ons team bestaat uit specialisten die beschikken over touw- en toegangsmiddelen en uitgebreide eerste hulp materiaal zoals brancards, stabiliseer- en evacuatie middelen.</p>
            <p>
            Wij kunnen stand-by staan tijdens een stop of turn-around om te adviseren, toezicht te houden en onmiddellijk in te grijpen bij incidenten. Ons Aerial Acces Emergency Response Team is oproepbaar bij incidenten op locaties die alleen toegankelijk zijn middels touwtechnieken.</p>
            
            
        <a className="link_contact" href="/contact/">Wij informeren u graag over de mogelijkheden. Neem daarom geheel vrijblijvend contact met ons op. </a>

        <p>Ons Emergency Response Team beschikt over de volgende kwalificaties: <br/>
            <span className="bold">IRATA*</span> en/of <span className="bold">ITRA**</span> (level I t/m III); <br/>
           <span className="bold">ITLS***</span> of in het bezit van een International First Aid-certificaat. <br/>
           <span className="bold">VOL-VCA****</span></p>
        <div className="links-emergency"><span>*</span> Industrial Rope Access Trade Association (https://irata.org) <br/>
        <span>**</span> International Technical Rescue Association (https://itra.international) <br/>
        <span>***</span> International Trauma Life Support (https://www.itrauma.org) <br/>
        <span>***</span> VCA staat voor Veiligheid, Gezondheid en Milieu (VGM) Checklist Aannemers (www.vca.nl) <br/>
        </div>
        </div>
        <div className="emergency-images">
<img src={image1} alt="" />
<img src={image2} alt="" />
    </div>
    </div>
 
    
</section>
);
};

export default EmergencyMain;