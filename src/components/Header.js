import React, { Component } from 'react';
import Scroll from './Scroll';
import config from '../../config';
export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openMenu: false,
      visibilityClass: '',
    };
  }
  toggleMenu = (value) => {
    this.setState({ openMenu: value });
  };
  handleScroll = () => {
    const { visibilityClass } = this.state;
    if (window.pageYOffset > 300) {
      if (visibilityClass !== 'navbar-shrink') {
        this.setState({ visibilityClass: 'navbar-shrink' });
      }
    } else  {
      if (window.pageYOffset > 1000 && visibilityClass === 'navbar-shrink') {
        this.setState({ visibilityClass: '' });
      }
    }
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  render() {
    const { openMenu, visibilityClass } = this.state;
    return (
      <nav
        className={`navbar navbar-expand-lg navbar-light fixed-top ${visibilityClass}`}
        id='mainNav'
      >
        <div className='container'>
          <Scroll type='id' element='page-top'>
              <a href='#page-top' className='navbar-brand'>
              {config.siteTitle}
              </a>
            </Scroll>
          <button
            onClick={(_) => this.toggleMenu(!openMenu)}
            className={`navbar-toggler navbar-toggler-right ${
              openMenu ? '' : 'collapsed'
            }`}
            type='button'
            aria-controls='navbarResponsive'
            aria-expanded={openMenu}
            aria-label='Toggle navigation'
          >
            <i className='fas fa-bars'></i>
          </button>
          <div
            className={`collapse navbar-collapse ${openMenu ? 'show' : ''}`}
            id='navbarResponsive'
          >
            <ul className='navbar-nav ml-auto'>
              <li className='nav-item'>
                <Scroll
                  onClick={(_) => this.toggleMenu(!openMenu)}
                  type='id'
                  element='about'
                >
                  <a className='nav-link' href='#about'>
                    Om mig
                  </a>
                </Scroll>
              </li>
              <li className='nav-item'>
                <Scroll
                  onClick={(_) => this.toggleMenu(!openMenu)}
                  type='id'
                  element='projects'
                >
                  <a className='nav-link' href='#projects'>
                    Projekt
                  </a>
                </Scroll>
              </li>
              <li className='nav-item'>
                <Scroll
                  onClick={(_) => this.toggleMenu(!openMenu)}
                  type='id'
                  element='signup'
                >
                  <a className='nav-link' href='#signup'>
                    Kontakt
                  </a>
                </Scroll>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
