import React, { Component } from 'react';

class HeroMainSystemsProducten extends Component {
state = { showMenu: false };

toggleMenu = () => {
this.setState({
showMenu: !this.state.showMenu,
});
};

render() {
const { showMenu } = this.state;
const menuVis = !showMenu ? 'hideDiv' : '';
return (
<div onClick={this.toggleMenu}>
    <div className='hero-element'>
        <article>
            <div className='hero-element-titel'>
                <h1 className="titelSystemsHero">Producten</h1>
                <span className='mobile-hero-button systems'>
                    <span>></span>
                </span>
            </div>
            <div className='hero-element-text'>
                <p>
                Unieke range permanente rope access rail systemen, davidsarmen en ankerpunten.
                </p>
            </div>
        </article>
        <div className='hero-element-image systems producten'>
            <a href='/systems/producten/' className='hero-element-image__link'>
            bekijk hier
            </a>
        </div>
    </div>
    {menuVis ? (
    <> </>
    ) : (
    <article className="extraInfoMobile mobile">
        <div className="systemContainerMobileInfo">
            <p>De opleidingen die wij verzorgen zijn op maat en voor alle hulpdiensten, industriële bedrijven en een ieder die veilig wil werken op hoogte. De trainingen zijn realistisch en van hoge kwaliteit. Ze zijn voorzien van oplossingen die getest zijn in het veld! </p>
        </div>
        <div className={`mobile container-info-mobile system producten`}>

            <a href='/systems/producten/'>bekijk hier</a>


        </div>
    </article>
    )}
</div>
);
}
}

export default HeroMainSystemsProducten;