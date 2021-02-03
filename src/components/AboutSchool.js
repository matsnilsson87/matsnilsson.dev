import React from 'react';
import downloadFile from '../assets/documents/C-Uppsats.pdf';
export default function AboutSchool() {
  return (
    <p className='text-white-50'>
      <h3>Utbildning</h3>
      <br />
      <dl>
        <dt>Universitet 2018-2021</dt>
        <dd>
          Systemvetenskapliga programmet vid Örebro universitet, utbildningen
          innefattar bland annat objektorienterad analys och design, agila
          metoder, interaktionsdesign, databashantering samt programmering i C#
          och Java. Under min valbara termin läste jag retorik och kommunikativt
          ledarskap.
          <br />
        </dd>
        <dd>
          C-Uppsats:
          <br />{' '}
          <a href={downloadFile} download>
            Det är en tuff bedömning, men den behöver ju göras
          </a>
          <br />
          {`- En explorativ fallstudie på svenska Försvarsmakten om
bedömningar av uppdateringar på säkerhetsklassade IT-system.`}
        </dd>
        <br />
        <dt>Militärtjänstgöring 2006-2007</dt>
        <dd> Bevakningsgruppchef på I19 i Boden. </dd>
        <br />
        <dt>Gymnasiet 2003-2006</dt>
        <dd>Barn- & Fritidsprogrammet med inriktning fritid.</dd>
      </dl>
    </p>
  );
}
