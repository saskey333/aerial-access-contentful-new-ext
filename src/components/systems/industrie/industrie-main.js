import React from 'react';
import imgsystem from "../../../images/Systems_Industrie_367x440px.jpg";
import imgsystem2 from "../../../images/Systems_Industrie_367x440px2.jpg";

const MainPageIndustrie = () => {
return (
<section className='main-page-systems industrie'>
    <div className="container">
        <div className="content-block-systems">
            <p className="light">Voor inspectie, onderhoud en constructie biedt het permanente Aerial Access rail systeem een tijdbesparende, veilige en efficiënte toegang tot de werkplek. De touwtechnieken zijn vaak de enige oplossing en voorkomen tijdrovende voorbereidingen. Door dit railsysteem zijn plaatsen te allen tijde bereikbaar. Met deze permanente oplossing zijn de werkzaamheden veiliger, efficiënter en goedkoper.  </p>
            <div className="industrie-block">
                <div className="industrie-block__left">
                    <p className="bold">De railsystemen zijn ontworpen om zowel horizontaal als verticaal op hoogte of diepte te kunnen bewegen met touwtechnieken. De rails zijn gemaakt van hoge kwaliteit aluminium. De trolley zijn gemaakt van sterk massief aluminium en vangen de hoge belastingen op en verminderen de wrijving. 
De gebruikte materialen zijn bestand tegen bijzonder agressieve omstandigheden zoals zeewater, chloor atmosferen of in omgevingen met extreme chemische verontreinigingen. De rails zijn te monteren aan alle type structuren zoals bijvoorbeeld staal, beton, metselwerk door middel van systeemsteunen.</p>
                    {/* <h2>Efficiëntie en effectiviteit </h2>
                    <p>
                        Een rope access rail van Aerial Access kan bij het ontwerp meegenomen worden. Bij de
                        ontwikkeling van de bouw van een object wordt de rail gemonteerd en als de geplaatst is, kan er
                        tijdens inspecties en onderhoudwerkzaamheden aanzienlijk sneller gewerkt worden. Je kunt met
                        twee personen per segment veilig en snel werken.
                        Eenmaal gepositioneerd in de twee runners hoeven er geen handelingen meer gedaan te worden om te
                        verplaatsen. Men kan zich dan veilig en snel verplaatsen onder bijvoorbeeld een platform of
                        overspanning, waardoor er een significante tijdsbesparing is .
                        Zwaar gereedschap en materiaal kun je bevestigen aan een separate runner waardoor dit niet
                        fysiek aan de klimmer bevestigd hoeft te worden.
                    </p> */}
                </div>
                <div className="industrie-block__right mobile-hide">
                <div>
                        <h2>Voordelen</h2>
                        <p><span>></span> Verhoging van de veiligheid</p>
                        <p><span>></span> Tijdsbesparing door effectiviteit</p>
                        <p><span>></span> Kosten besparend door efficiëntie</p>
                        <p><span>></span> Ten allen tijde te bereiken</p>
                        <p><span>></span> Betere calculatie van werkuren</p>
                        <p><span>></span> Adequatere redding mogelijkheden</p>

                       
                    </div>
                    <div>
                        <h2 className="industrieInfo">Locaties</h2>
                        <p><span>></span> Silo's</p>
                        <p><span>></span> Transition pieces</p>
                        <p><span>></span> Heli deck</p>
                        <p><span>></span> Scheepvaart</p>
                        <p><span>></span> Productie platform</p>
                    </div>
                    <div>
                        <h2 className="industrieInfo">industrie en offshore</h2>
                        <p><span>></span> Onderhoudsarm</p>
                        <p><span>></span> Makkelijk te installeren</p>
                        <p><span>></span> Hogere veiligheid</p>
                        <p><span>></span> Efficiënter werken</p>
                        <p><span>></span> Offshore bestendig</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="content-block-systems-2">
            <img className="mobile-hide" src={imgsystem} alt="" />
            <img className="mobile-hide" src={imgsystem2} alt="" />
            <div className="content-block-systems__buttons">
                <a href="/systems/advies-service/">advies & services</a>
                <a href="/systems/producten/">producten</a>
            </div>
            <img className="mobile" src={imgsystem} alt="" />
            <img className="mobile" src={imgsystem2} alt="" />
        </div>
        <div className="industrie-block__right mobile">
                    <div>
                        <h2>Voordelen</h2>
                        <p><span>></span> Verhoging van de veiligheid</p>
                        <p><span>></span> Tijdsbesparing door effectiviteit</p>
                        <p><span>></span> Geld bespaard</p>
                       
                    </div>
                    <div>
                        <h2 className="industrieInfo">Locaties</h2>
                        <p><span>></span> Silo's</p>
                        <p><span>></span> Tranistion piece</p>
                        <p><span>></span> Heli deck</p>
                        <p><span>></span> Scheepvaart</p>
                    </div>
                    <div>
                        <h2 className="industrieInfo">industrie en offshore</h2>
                        <p><span>></span> Weinig onderhoud</p>
                        <p><span>></span> Makkelijk te installeren</p>
                        <p><span>></span> Hogere veiligheid</p>
                        <p><span>></span> Efficiënter werken</p>
                        <p><span>></span> Offshore bestendig</p>
                        <p><span>></span> Adequatere reddings mogelijkheden</p>
                        <p><span>></span> Werkuren beter te calculeren</p>
                    </div>


                </div>
    </div>

</section>
);
};

export default MainPageIndustrie;