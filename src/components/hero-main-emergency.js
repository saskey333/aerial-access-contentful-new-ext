import React, { Component } from 'react';
import LogoMobileHeroEmergency from '../assets/logo-diensten_ERT.svg';

class HeroMainEmergency extends Component {
  state = { showMenu: false };

  toggleMenu = () => {
    this.setState({
      showMenu: !this.state.showMenu,
    });
  };
  componentDidMount() {
    const handler = e => this.setState({matches: e.matches});
    window.matchMedia("(max-width: 875px)").addListener(handler);
    }
  render() {
    const { showMenu } = this.state;
    const menuVis = !showMenu ? 'hideDiv' : '';
    return (
      <div onClick={this.toggleMenu}>
        <a href={this.state.matches ? '/emergency/':null}>
        <div className='hero-element'>
          <article>
            <div className='hero-element-titel'>
              <LogoMobileHeroEmergency
                className='desktop-hero-logo'
                fill='#BE0000'
              />

              <LogoMobileHeroEmergency
                className='mobile-hero-logo mobile'
                fill='#BE0000'
              />
              <span className='mobile-hero-button emergency'>
                <span>{'>'}</span>
              </span>
            </div>

            <div className='hero-element-text'>
              <p>
              Inzetbaar op plaatsen waar hulpdiensten niet kunnen komen. Met name op hoogte, diepte en in besloten ruimte.{' '}
              </p>
            </div>
          </article>
          <div className='hero-element-image emergency'>
            <a href='/emergency/' className='hero-element-image__link'>
              Emergency team
            </a>
          </div>
        </div>
        {menuVis ? (
          <> </>
        ) : (
          <article className="mobile home-hero-mobile">
            <div className={`mobile container-info-mobile emergency`}>
              <p>
                Het gebruik van rope access is efficiënt en effectief. Door het
                gebruik van gespecialiseerde rope access technieken zijn wij in
                staat op moeilijke toegankelijke locaties werkzaamheden uit te
                voeren.
              </p>
              <a href='/emergency/'>Meer info</a>
            </div>
          </article>
        )}
        </a>
      </div>
    );
  }
}

export default HeroMainEmergency;
