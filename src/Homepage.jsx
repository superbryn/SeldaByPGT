import { useRef } from 'react';
import padam from './assets/imga.png';
import Cardone from './cards/Cardone';
import Cardtwo from './cards/Cardtwo';
import Textcard from './cards/Textcard';
import People from './cards/peoplecard/meme_bers';
import './homepage.css'
import { useNavigate } from 'react-router-dom';
import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';

function Homepage() {
  const navigator = useNavigate();
  const sectionTwoRef = useRef(null);
  const sectionThreeRef = useRef(null);

  const scrollToSectionTwo = () => {
    if (sectionTwoRef.current) {
      sectionTwoRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToSectionThree = () => {
    if (sectionThreeRef.current) {
      sectionThreeRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navigateToSelda = () => {
    navigator('/selda')
  }
 
  return (
    <>
    {/* lemme start this project by sayin fuldge off fish miss */}

      <div className="container">
        <header className="header"> 
          <div className="title">
            <p>SELDA</p>
          </div>
          <nav className="navbar">
            <button onClick={() => window.scrollTo(0, 0)}>Home</button>
            <button onClick={scrollToSectionTwo}>About Us</button>
            <button onClick={scrollToSectionThree}>Contact Us</button>
          </nav>
        </header>

        <button className="rectangle" onClick={navigateToSelda}>Get Started</button>
        <img className="padam" src={padam} alt="Padam" />

        <div className="sectionTwo" ref={sectionTwoRef}>
          <h2>About</h2>
          <Cardone className="Cardone" />
          <Cardtwo className="Cardtwo" />
          <Textcard/>
          <People/>
        </div>
        
        <footer className='sectionThree' ref={sectionThreeRef}>
          <a href="https://github.com/superbryn/SeldaByPGT" target='_blank' rel='noopener noreferrer'><FaGithub/></a>
          <a href="https://linkedin.com/dickchadjophy" target='_blank' rel='noopener noreferrer'><FaLinkedin/></a>
          <a href="https://x.com/beethadavis" target='_blank' rel='noopener noreferrer'><FaTwitter/></a>
        </footer>
      </div>
    </>
  );
}

export default Homepage;
