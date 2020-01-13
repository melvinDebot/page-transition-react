import React from 'react';
import Title from '../components/Title';
import {gsap} from 'gsap';

const Home = () => {
  return(
    <div className="inner">
      <Title lineContent="This is the" lineContent2="Home Page"/>
      <div>
        <p className="info">
        Ideoque fertur neminem aliquando ob haec vel similia poenae addictum oblato de more elogio revocari iussisse, quod inexorabiles quoque principes factitarunt. et exitiale hoc vitium, quod in aliis non numquam intepescit, in illo aetatis progressu effervescebat, obstinatum eius propositum accendente adulatorum cohorte.
        </p>
      </div>
    </div>
  )
}

export default Home;