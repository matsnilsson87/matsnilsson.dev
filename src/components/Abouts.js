import React, { useState } from 'react';

import AboutCode from '../components/AboutCode';
import AboutSchool from '../components/AboutSchool';
import AboutWork from '../components/AboutWork';
import AboutFamily from '../components/AboutFamily';

import code from '../assets/images/icons8-source_code.png';
import school from '../assets/images/icons8-student_male.png';
import work from '../assets/images/icons8-worker.png';
import family from '../assets/images/icons8-family.png';

const Abouts = () => {
  const abouts = [code, school, work, family];
  const [myAbout, setMyAbout] = useState('');

  return (
    <>
      <div className='col-lg-8 mx-auto '>
        <div>
          {abouts.map((about) => (
            <p key={about} onClick={() => setMyAbout(about)}></p>
          ))}
        </div>
        <div>
          <div>{myAbout}</div>
          <div>
            {myAbout === <AboutCode />}
            {myAbout === <AboutSchool />}
            {myAbout === <AboutWork />}
            {myAbout === <AboutFamily />}
          </div>
        </div>
      </div>
    </>
  );
};
export default Abouts;
