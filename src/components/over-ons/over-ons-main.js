import React from 'react';
import PeterImg from '../../images/peter.png'
import RaymondImg from '../../images/raymond 1.png'

const OverOnsMain=()=> {
return (
<section className='main-over-ons'>
    <div className='container'>
        <div className="description-about">
            <div className="description"> <img src={PeterImg} alt="" />
                <h1>Peter schimmel</h1>
                <p className="description--intro">In de Alpen en hooggebergte is mijn veiligheidsgevoel voor groepen
                    goed
                    tot zijn recht gekomen. In deze uitdagende omgeving gaf ik zomers voornamelijk klim en canyoning
                    cursussen. Ook in de winter was ik in de bergen te vinden. Hier begeleide ik ski tours.</p>
                <p className="description--main">Door mijn nieuwsgierigheid ben ik in 2006 in contact gekomen met het
                    Industriële klimmen en heb hier de nodige Nationale en Internationale opleidingen in gevolgd. Hier
                    heb
                    ik freelance opdrachten gedaan en ben bij Ascent Safety in dienst gekomen. Hier heb ik 10 jaar
                    verschillende werkzaamheden verricht, zoals; PBM inspecties, trainer veilig werken en redden op
                    hoogte
                    van Marine Brandweer tot Irata cursussen.
                    <br /> <br />
                    Als mede heb ik cursussen geschreven zoals GWO en opleidingen
                    ontwikkeld voor de evenementen branche. Binnen Ascent Safety was ik accountmanager voor
                    verschillende
                    bedrijven in de wind, telecom, olie en gas, evenementen branche en voor de overheid zoals politie en
                    defensie.</p>
            </div>
            <div className="description"> <img src={RaymondImg} alt="" />
                <h1>Raymond Burger</h1>
                <p className="description--intro">Na 30 jaar bij de overheid gewerkt te hebben, heb ik de stap genomen
                    om als zelfstandige op de arbeidsmarkt werkzaamheden uit te gaan voeren. Tijdens mijn werk bij de
                    politie heb ik als specialist werkzaamheden en trainingen op hoogte gegeven.
                </p>
                <p className="description--main">Inmiddels heb ik mij geheel laten omscholen naar de Industriële werken
                    op hoogte en heb daarvoor de benodigde cursussen gevolgd. Inmiddels aan meerdere projecten als
                    freelancer gewerkt te hebben, heb ik mij ook laten scholen volgens de ITRA-norm (International
                    Technical Rescue Association) voor stand-by Rescue opdrachten.</p>
            </div>
        </div>
    </div>
</section>);
}

;

export default OverOnsMain;