import React from "react";
import '../styles/Footer.css';
import github from '../media/github.png';
import linkedin from '../media/linkedin.png';
import Pdf from '../media/Resume.pdf';

function Home() {
    return(
      <div className="Footer-body">
          <p className="Footer-CP">Copyright &copy; Adam Oberg 2022</p>
          <div className="Footer-Logo-Container">
            <a
              className="Links"
              href="https://www.linkedin.com/in/adam-oberg-455504187/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedin} className="Footer-Icon" alt="linkedin"/>
            </a>
            <a
              className="Links"
              href="https://github.com/obergad"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={github} className="Footer-Icon" alt="github"/>
            </a>
          </div>

          <div className="Footer-Link-Container">
            <a className="Footer-Link">About</a>
            <a className="Footer-Link">Contact</a>
            <a href={Pdf} target="_blank"  className="Footer-Link">Resume</a>
          </div>
      </div>
    );
}
export default Home;
