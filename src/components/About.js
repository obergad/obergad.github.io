import React from "react";
import '../styles/About.css';
import logo from '../media/me2.jpg';
import github from '../media/github.png';
import linkedin from '../media/linkedin.png';
import Button from '@mui/material/Button';
import Pdf from '../media/Resume.pdf';

function Home() {
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
          <p className="About-Text">I'm a Undergraduate Student at Oregon State University graduating in Spring of 2022 and my passion is creating and playing video games.</p>
          <p className="About-Text">My intrests are Computer Graphics, 3D Modeling, 3D Animation, and Website Development. </p>
          <h3 className="About-Button-Header">Learn More About My:</h3>
          <div className="About-Button-Container">
          <Button className= "About-Button" sx={{margin:2.5}} variant="contained" disabled>Skills</Button>
          <Button className= "About-Button" sx={{margin:2.5}} variant="contained" disabled>Projects</Button>
          <Button className= "About-Button" sx={{margin:2.5}} variant="contained" disabled>Work Experience</Button>
          <Button className= "About-Button" sx={{margin:2.5}} href={Pdf} target="_blank"variant="contained">Resume</Button>
          </div>
        </div>

      </div>
    );
}
export default Home;
