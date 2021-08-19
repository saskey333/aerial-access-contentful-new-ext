import React from 'react';
import RiskLogo from '../../images/risk-safety.png';
import VCAImg from '../../images/vca.png';

const FooterEmergency = () => {
return (
<section className='footer-project emergency'>
    <div className="container">
        <div className="imagesLogo">
       <img src={RiskLogo} alt=""/> 
       <img src={VCAImg} alt=""/>
       </div>
        <div className="footer-emergency-content">
            <h2>
                Partner
            </h2>
            <p>
            Onze samenwerkingspartner Risk Safety heeft 24 uur per dag en zeven dagen per week
veiligheidspersoneel voor diverse werkzaamheden voor u beschikbaar.
Risk Safety adviseert u over brandveiligheid & beveiliging.
<br />

U kunt bij hun terecht voor complexe brandveiligheid- en beveiligingsvraagstukken en voor
de best mogelijke veiligheid, verhuurt Risk Safety specifieke veiligheidsmiddelen.
Risk Safety Holland B.V. is uw partner in veiligheid.
<br /> <br /> 
info@risksafety.nl <br /> 
06-24470147</p>
        </div>
        <div></div>
    </div>
</section>
);
};

export default FooterEmergency;