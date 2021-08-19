import React from 'react';
import Navigation from './navigation';
import '../styles/styles.scss';
import Banner from './banner-desktop';
import Footer from './footer';
import NavMobile from './nav-mobile';
import CopyrightFooter from './copyright-footer';


const StyledLayout = {
width: '100%',
minHeight: '100vh',
margin: '0 auto',
display: 'grid',
gridTemplateRows: 'auto 1fr auto',
gridTemplateColumns: '100%',
};

const DisclaimerLayout = () => {
return (
<div style={StyledLayout}>
    <Navigation />
    <NavMobile />
    <Banner />
    <div className="disclaimer-container">
        <h1>Disclaimer</h1>
        <p>Deze website is eigendom van de Aerial Access B.V. De informatie op deze site bevat uitsluitend algemene
            informatie en is geen advies aan u. De informatie is afkomstig van bronnen die betrouwbaar mogen worden
            geacht. Voor de juistheid en volledigheid ervan kunnen wij niet instaan. Aerial Access B.V. is niet
            aansprakelijk voor schade geleden als gevolg van onjuistheden of onvolledigheden in de aangeboden
            informatie. Ook niet voor de schade die het gevolg is van problemen veroorzaakt door of inherent aan het
            verspreiden van informatie via het internet.
        </p>
        <p>De internetsite is ontwikkeld voor Aerial Access B.V. om klanten, gebruikers en andere geïnteresseerden te
            informeren over onze producten en diensten. Aerial Access is geregistreerd bij de Kamer van Koophandel te
            Almere, Nederland nr. 73983047.
            Onze bedrijfslocatie is gevestigd op de Trawlerkade 60, 1976 CC IJmuiden, Nederland.
        </p>

        <h3>Nederlands recht</h3>
        <p>Op deze website en disclaimer is Nederlands recht van toepassing. De informatie op deze site is bedoeld voor
            mensen die in Nederland wonen en voor bedrijven die in Nederland gevestigd zijn. Bij een woonplaats of
            vestigingsplaats in het buitenland kunnen andere regels gelden.
        </p>
        <h3>Disclaimer
        </h3>
        <p>De voorwaarden van deze disclaimer zijn van toepassing op (het gebruik van) de website aerial-access.com
            ("website") en elke bijbehorende pagina van Aerial Access B.V. Wij verzoeken u de disclaimer zorgvuldig te
            lezen en door gebruik te maken van de website gaat u akkoord met deze disclaimer.

        </p>
        <h3>Getoonde informatie
        </h3>
        <p>De informatie op de website is met grote zorg samengesteld, maar de mogelijkheid bestaat dat de getoonde
            informatie niet actueel, correct en/of volledig is. De getoonde of van de website gedownloade informatie en
            de merknaam en logo's zijn auteursrechtelijk beschermd. De informatie op de website mag alleen worden
            gekopieerd voor persoonlijk gebruik.

        </p>
        <h3>Informatie van derden
        </h3>
        <p>Aerial Access maakt gebruik van hyperlinks naar content van derden in een aantal nieuwsartikelen en links.
            Deze websites worden niet door Aerial Access onderhouden en deze verwijzingen worden alleen ter informatie
            aangeboden. De selectie van de internetsites waarnaar wij verwijzen is uiterst zorgvuldig, maar wij kunnen
            niet instaan voor de inhoud en het functioneren van deze internetsites.
        </p>
        <h3>Over de disclaimer

        </h3>
        <p>Aerial Access B.V. behoudt zich het recht om zonder nadere aankondiging deze disclaimer aan te passen en  heeft te allen tijde het recht om wijzigingen aan te brengen in de inhoud en/of toegang tot de website.
De meest actuele disclaimer vindt u altijd op deze website.
        </p>
        <h3>Vragen en/of opmerkingen

        </h3>
        <p>Mocht u vragen hebben over onze opmerkingen dan helpen wij u graag, stuur uw verzoek naar <a href="mailto:info@aerial-access.com">info@aerial-access.com</a>

        </p>
        <p>Namens de directie van Aerial Access B.V.
</p>

    </div>
    <Footer />
    <CopyrightFooter />

</div>
);
};

export default DisclaimerLayout;