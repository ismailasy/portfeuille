import React from 'react'
import { LinkedIn } from '@material-ui/icons';
import { Email } from '@material-ui/icons';
import { GitHub } from '@material-ui/icons';
import '../styles/Home.css';

function Home() {
  return (
    <div className='home'>
      <div className='about'>
        <h2> Hello, je suis Ismaila SY</h2>
        <div className='prompt'> <p> Ingenieur DevOps </p>
        <LinkedIn/>
        <Email/>
        <GitHub/>
        </div>
      </div>
      <div className='skills'>
        <h1> Compétences</h1>
        <ol className='list'>
          <li className='item'>
            <h2> Developpement Web/Moble</h2>
            <span>
              PHP, HTML, CSS, JQuery,Android ,Flutter,Python,
              React JS,java Script,MySQL,Oracle
            </span>
          </li>
          <li className='item'>
            <h2> Réseaux et Sysèmes Informatiques</h2>
            <span>
              Administration réseau ,Administration système,
              Voix sur IP (VoIP),GSM,LTE,Telecom
              </span>
          </li>
          <li className='item'>
            <h2> Securité informatique</h2>
            <span>
              Audit ,Supervision ,Maintenance
              </span>
          </li>
          <li className='item'>
            <h2> ML/DL</h2>
            <span>
              Modèles machines learning ,
              Deep learning ,Transfert learning
            </span>
          </li>
        </ol>
      </div>

    </div>
  )
}

export default Home;