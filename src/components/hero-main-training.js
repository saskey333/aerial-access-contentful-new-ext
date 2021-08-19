import React, { Component } from 'react';
import LogoMobileHeroTraining from '../assets/logo-diensten_training.svg';

class HeroMainTraining extends Component {
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
        <a href={this.state.matches ? '/trainingen/':null}>
        <div className='hero-element'>
          <article>
            <div className='hero-element-titel'>
              <LogoMobileHeroTraining
                className='desktop-hero-logo'
                fill='#0D71B9'
              />

              <LogoMobileHeroTraining
                className='mobile-hero-logo mobile'
                fill='#0D71B9'
              />
              <span className='mobile-hero-button training'>
                <span>></span>
              </span>
            </div>

            <div className='hero-element-text'>
              <p>
              Realistische trainingen voor veilig werken en redden op hoogte, diepte en in besloten ruimte. 

              </p>
            </div>
          </article>
          <div className='hero-element-image training'>
            <a href='/trainingen/' className='hero-element-image__link'>
              trainingen
            </a>
          </div>
        </div>
        {menuVis ? (
          <> </>
        ) : (
          <article className="mobile home-hero-mobile">
            <div className={`mobile container-info-mobile training`}>
              <p>
                Het gebruik van rope access is efficiënt en effectief. Door het
                gebruik van gespecialiseerde rope access technieken zijn wij in
                staat op moeilijke toegankelijke locaties werkzaamheden uit te
                voeren.
              </p>
              <a href='/trainingen/'>trainingen</a>
            </div>
          </article>
        )}
        </a>
      </div>
    );
  }
}

export default HeroMainTraining;
