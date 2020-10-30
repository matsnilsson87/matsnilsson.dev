import React from 'react';
import Img from 'gatsby-image';
import { graphql, useStaticQuery } from 'gatsby';

import Layout from '../components/Layout';
import Scroll from '../components/Scroll';

import config from '../../config';
import Footer from '../components/Footer';
import SocialLinks from '../components/SocialLinks';
import Abouts from '../components/Abouts';
import Header from '../components/Header';

import newsab from '../assets/images/newsab.png';
import oru21 from '../assets/images/oru21.png';
import bgMaster from '../assets/images/bg-masthead.jpg';

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

      <header className='masthead' id="page-top">
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
                Hej på dig, kul att du hittat hit! Jag är en systemvetare med
                utbildning från systemvenskapliga programmet på Örebro
                Universitet. Jag brinner för systemutveckling och just nu arbetar
                jag mycket med javascript och då främst react. Jag sysslar även med nätverk och servrar i mindre skala när tid finns.
                <br/><br/>
                 {/* Kilcka på ikonerna för att läsa mer om
                mig. */}
              </p>
            </div>
            <div className='col-lg-8 mx-auto '></div>
            <p className='text-white-50'></p>

            <Abouts />
          </div>
        </div>
      </section>

      <section id='projects' className='projects-section bg-light'>
        <div className='container'>
          <div className='row align-items-center no-gutters mb-4 mb-lg-5'>
            <div className='col-xl-8 col-lg-7'>
              <img className='img-fluid mb-3 mb-lg-0' src={bgMaster} alt='' />
            </div>
            <div className='col-xl-4 col-lg-5'>
              <div className='featured-text text-center text-lg-left'>
                <h4>matsnilsson.dev</h4>
                <p className='text-black-50 mb-0'>
                  Denna portfoliosida är byggd med <a href="http://www.gatsbyjs.com" target="_blank" rel="noreferrer">Gatsby</a> med temat <a href="https://github.com/anubhavsrivastava" target="_blank" rel="noreferrer">Greyscale.</a> Gatsby är ett react baserat open source framework för webbsidor och appar. 
                  <br/><br/>
                  Jag har även domänen <a href="http://www.nilsson.red" target="_blank" rel="noreferrer">nilsson.red</a> som pekar mot en egen linuxserver där jag testar lite olika projekt. Kika in och se om det händer nå kul!
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
                      <a href='https://newsab.se' target="_blank" rel="noreferrer">
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
              <img src={oru21} alt='oru21.dev' />
            </div>
            <div className='col-lg-6 order-lg-first'>
              <div className='bg-black text-center h-100 project'>
                <div className='d-flex h-100'>
                  <div className='project-text w-100 my-auto text-center text-lg-right'>
                    <h4 className='text-white'>oru21</h4>
                    <p className='mb-0 text-white-50'>
                      oru21 är ett pågående mern-projekt dvs fullstack projekt
                      med mongoDB express react & nodeJS. Tanken är att det ska
                      bli en liten samlingsplats för utvecklare.<br></br>
                      <a
                        href='https://github.com/matsnilsson87'
                        target="_blank" rel="noreferrer"
                      >
                        Github
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
