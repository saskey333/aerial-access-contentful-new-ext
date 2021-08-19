import React, { Component } from 'react';

import LogoMobileHeroSystems from '../assets/logo-diensten_system.svg';

class HeroMainSystems extends Component {
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
        <a href={this.state.matches ? '/systems/':null}>
        <div className='hero-element'>
          <article>
            <div className='hero-element-titel'>
              <LogoMobileHeroSystems
                className='desktop-hero-logo'
                fill='#FF7300'
              />

              <LogoMobileHeroSystems
                className='mobile-hero-logo mobile'
                fill='#FF7300'
              />
              <span className='mobile-hero-button systems'>
                <span>></span>
              </span>
            </div>

            <div className='hero-element-text'>
              <p>
              Adviseert en levert permanente rope access railsystemen. 

              </p>
            </div>
          </article>
          <div className='hero-element-image systems'>
            <a href='/systems/' className='hero-element-image__link'>
              systemen
            </a>
          </div>
        </div>
        {menuVis ? (
          <> </>
        ) : (
          <article className="mobile home-hero-mobile">
            <div className={`mobile container-info-mobile system`}>
              <p>
                Het gebruik van rope access is efficiënt en effectief. Door het
                gebruik van gespecialiseerde rope access technieken zijn wij in
                staat op moeilijke toegankelijke locaties werkzaamheden uit te
                voeren.
              </p>
              <a href='/systems/'>systemen</a>
            </div>
          </article>
        )}
        </a>
      </div>
    );
  }
}

export default HeroMainSystems;
