import React, { useState } from 'react';

import AboutCode from './AboutCode';
import AboutSchool from './AboutSchool';
import AboutWork from './AboutWork';
import AboutFamily from './AboutFamily';

import code from '../assets/images/icons8-source_code.png';
import school from '../assets/images/icons8-student_male.png';
import work from '../assets/images/icons8-worker.png';
import family from '../assets/images/icons8-family.png';


export default function About() {
  const abouts = [<AboutCode />, <AboutSchool />,<AboutWork />, <AboutFamily />];

  const [myAbout, setMyAbout] = useState();


  return (
    
     <div> 
            <img className='aboutImg' src={code} onClick={() => setMyAbout(AboutCode) }/>
            
            <img className='aboutImg' src={school}  onClick={() => setMyAbout(AboutSchool)}/>

            <img className='aboutImg' src={work}  onClick={() => setMyAbout(AboutWork)}/>
             
            <img className='aboutImg' src={family} onClick={() => setMyAbout(AboutFamily)}/>
            
            <br/>
            <br/>
          <div>{myAbout}</div>
          
     </div>
      
    
  );
};

