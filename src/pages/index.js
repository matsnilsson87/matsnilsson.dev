import React from 'react';
import Img from 'gatsby-image';
import { graphql, useStaticQuery } from 'gatsby';

import Layout from '../components/Layout';
import Scroll from '../components/Scroll';

import config from '../../config';
import Footer from '../components/Footer';
import SocialLinks from '../components/SocialLinks';
import About from '../components/About';
import Header from '../components/Header';

import newsab from '../assets/images/newsab.png';
import pamp from '../assets/images/pamp.png';
import bgMaster from '../assets/images/bg-masthead.jpg';

const d = new Date();
const y = d.getFullYear();
const age = y - 1987;

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query Images {
      image: file(relativePath: { eq: "mats_profile.png" }) {
        id
        childImageSharp {
          fixed(width: 200) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);
  console.log(data);
  return (
    <Layout>
      <Header />

      <header className='masthead' id='page-top'>
        <div className='container d-flex h-100 align-items-center'>
          <div className='mx-auto text-center'>
            <h1 className='mx-auto my-0 text-uppercase'>{config.heading}</h1>
            <h2 className='text-white-50 mx-auto mt-2 mb-5'>
              {config.subHeading}
            </h2>
            <Scroll type='id' element='about'>
              <a href='#about' className='btn btn-primary'>
                Om mig
              </a>
            </Scroll>
          </div>
        </div>
      </header>

      <section id='about' className='about-section text-center'>
        <div className='container'>
          <Img
            fixed={data.image.childImageSharp.fixed}
            className='img-rotate'
          />

          <div className='row'>
            <div className='col-lg-8 mx-auto'>
              <h2 className='text-white mb-4'>Mats Nilsson</h2>
              <p className='text-white-50'>
                Hej på dig, kul att du hittat hit! Jag är en {age}-årig
                utvecklare som snart avslutar mina studier vid systemvenskapliga
                programmet på Örebro universitet. Vid sidan av mina studier
                driver jag en liten webbyrå tillsammans med en vän. Blir det
                lite tid över sysslar jag gärna med nätverk och servrar i mindre
                skala. <br />
                Läs mer om mig genom att klicka på ikonerna här nedanför.
              </p>

              <p className='text-white-50'>
                <About />
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className='projects-section bg-light'>
        <div className='container'>
          <div className='row align-items-center no-gutters mb-4 mb-lg-5'>
            <div id='projects' className='col-xl-8 col-lg-7'>
              <img className='img-fluid mb-3 mb-lg-0' src={bgMaster} alt='' />
            </div>
            <div className='col-xl-4 col-lg-5'>
              <div className='featured-text text-center text-lg-left'>
                <h4>matsnilsson.dev</h4>
                <p className='text-black-50 mb-0'>
                  Den här sidan är byggd med{' '}
                  <a
                    href='http://www.gatsbyjs.com'
                    target='_blank'
                    rel='noreferrer'
                  >
                    Gatsby{' '}
                  </a>
                  och temat{' '}
                  <a
                    href='https://github.com/anubhavsrivastava'
                    target='_blank'
                    rel='noreferrer'
                  >
                    Greyscale.{' '}
                  </a>
                  Gatsby är ett react-baserat open source framework för
                  webbsidor och appar.
                  <br />
                  <br />
                  Jag har även domänen{' '}
                  <a
                    href='http://www.nilsson.red'
                    target='_blank'
                    rel='noreferrer'
                  >
                    nilsson.red{' '}
                  </a>
                  som pekar mot en egen Linux server där jag testar lite olika
                  projekt. Kika in och se om det händer nå kul!
                </p>
              </div>
            </div>
          </div>

          <div className='row justify-content-center no-gutters mb-5 mb-lg-0'>
            <div className='col-lg-6 img-logo'>
              <img className='img-fluid' src={newsab} alt='newsab' />
            </div>
            <div className='col-lg-6'>
              <div className='bg-black text-center h-100 project'>
                <div className='d-flex h-100'>
                  <div className='project-text w-100 my-auto text-center text-lg-left'>
                    <h4 className='text-white'>
                      Nilsson Enerholm Webb & Systemutveckling AB
                    </h4>
                    <p className='mb-0 text-white-50'>
                      Newsab är en liten webbyrå som jag äger och driver
                      tillsammans med min vän och kollega Carl-Fredrik. Titta
                      gärna in hos oss!<br></br>
                      <a
                        href='https://newsab.se'
                        target='_blank'
                        rel='noreferrer'
                      >
                        www.newsab.se
                      </a>
                    </p>
                    <hr className='d-none d-lg-block mb-0 ml-0' />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='row justify-content-center no-gutters'>
            <div className='col-lg-6 img-logo'>
              <img src={pamp} alt='nilssonenerholm.se' />
            </div>
            <div className='col-lg-6 order-lg-first'>
              <div className='bg-black text-center h-100 project'>
                <div className='d-flex h-100'>
                  <div className='project-text w-100 my-auto text-center text-lg-right'>
                    <h4 className='text-white'>PAMP Projektet</h4>
                    <p className='mb-0 text-white-50'>
                      Under vårterminen -21 genomför jag och en studiekamrat ett
                      systemutvecklingsprojekt. Projektet sker på uppdrag och
                      tillsammans med Combitech AB. Vi ingår i en liten grupp
                      som ska utveckla ett system för portabel antennmätning.
                      Projektet innefattar kravinsamling, design, utveckling &
                      dokumentation. Följ gärna arbete på vår blogg. <br></br>
                      <a
                        href='https://nilssonenerholm.se'
                        target='_blank'
                        rel='noreferrer'
                      >
                        PAMP Projektet
                      </a>
                    </p>
                    <hr className='d-none d-lg-block mb-0 mr-0' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SocialLinks />
      <Footer />
    </Layout>
  );
};

export default IndexPage;
