import React, { useRef }  from "react";
import '../styles/About.css';
import logo from '../media/me_shasta.jpg';
import github from '../media/github.png';
import linkedin from '../media/linkedin.png';
import Button from '@mui/material/Button';
import Pdf from '../media/Resume.pdf';
import * as Scroll from 'react-scroll';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


function About() {

    return(
      <div className="About-body">
        <div className="About-Container">
          <img src={logo} className="about-profile-picture" alt="profilepic"/>

          <div className="About-Logo-Container">
            <a
              className="Links"
              href="https://www.linkedin.com/in/adam-oberg-455504187/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedin} className="About-Icon" alt="linkedin"/>
            </a>
            <a
              className="Links"
              href="https://github.com/obergad"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={github} className="About-Icon" alt="github"/>
            </a>
          </div>
        </div>
        <div className="About-Text-Container">
          <h1 className="About-Title">Adam Oberg</h1>
          <p className="About-Text-Header">OSU '22, Computer Science, Simulation and Game Programming </p>
          <p className="About-Text">I'm a recently graduated CS professional with interestes in Computer Graphics, 3D Modeling, and Video Game Development. In my free time I enjoy creating procedurally generated artworks of various extraterrestrial objects, developing add-ons for various video games, and creating my own personal passion project video game. </p>
          <p className="About-Text">I am interested in starting my carrer and growing my expertise. With a passion for creativiy and ingenuity I hope to develop projects that bring a sense of enjoyment and wonder to the hearts of many. </p>
          <h4 className="About-Button-Header">Learn More About Me By Scrolling Below</h4>
        </div>

      </div>
    );
}
export default About;
