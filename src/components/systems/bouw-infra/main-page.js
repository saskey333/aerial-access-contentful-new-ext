import React from 'react';
import imgsystem from "../../../images/Systems_Bouw en Infra_367x440px.jpg";
import imgsystemmobile from "../../../images/image-systems-mobile.png";

const MainPageSystems = () => {
return (
<section className='main-page-systems'>
    <div className="container">
        <div className="content-block-systems">
            <p className="intro-bouwinfra">Aerial Access biedt verschillende systemen aan waarbij rails worden gemonteerd om moeilijk bereikbare locaties permanent toegankelijk te maken voor touwtechnieken.  
Deze systemen besparen op onderhoud- en installatiekosten. Zij verhogen de veiligheid en zijn permanent te installeren zonder verstoring van het aanzicht van het gebouw. Ook toepasbaar voor bestaande gebouwen en infra locaties. In de ontwerpfase kunnen wij mee denken over de toepassing van Aerial Access Systems.</p>
<br />

                <div className="content-block-systems-2 mobile">
                    
                <div className="content-block-systems__buttons">
                <a href="">advies & services</a>
                <a href="">producten</a>
            </div>
            <img src={imgsystemmobile} alt="" />
            
        </div>
            <div className="content-block-systems-points">
                <div>
                    <h2 className="h2">Locaties</h2>
                    <p><span>></span> Gevel</p>
                    <p><span>></span> Atrium</p>
                    <p><span>></span> Platte daken</p>
                    <p><span>></span> Binnentuinen</p>
                    <p><span>></span> Boven water werkzaamheden</p>
                    <p><span>></span> Bruggen</p>
                    <p><span>></span> Renovaties</p>
                </div>
                <div>
                    <h2 className="h2">Bouw en infra</h2>
                    
                    <p><span>></span> Nieuwe mogelijkheden</p>
                    <p><span>></span> Esthetische oplossingen zonder verstoring van aanzicht</p>
                    <p><span>></span> Lage onderhouds- en installatiekosten</p>
                    <p><span>></span> Veiligheid verhogend</p>
                    <p><span>></span> Met meerdere mensen tegelijk aan het werk</p>
                    <p><span>></span> Moeilijk bereikbare locaties gemakkelijk te bereiken</p>
                    <p><span>></span> Permanent of herplatsbaar</p>
                </div>
                
            </div>
            <a className="link_contact bouw-infra" href="/contact/">Wij informeren u graag over de mogelijkheden. Neem daarom geheel vrijblijvend contact met ons op. </a>
        </div>
        <div className="content-block-systems-2 mobile-hide">
            <img src={imgsystem} alt="" />
            <div className="content-block-systems__buttons">
                <a href="/systems/advies-service/">advies & services</a>
                <a href="/systems/producten/">producten</a>
            </div>
        </div>
    </div>

</section>
);
};

export default MainPageSystems;