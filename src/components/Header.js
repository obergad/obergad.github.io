import React from "react";
import github from '../media/github.png';
import linkedin from '../media/linkedin.png';
import '../styles/App.css';
import Pdf from '../media/resume_v1.2.0.pdf';
function Header() {
    return(
      <header className="App-header">
      <a><h1 href = "../" className="header-text">Adam Oberg</h1></a>
      <div className="Icons">
      <a href = "#about" className="text-Links">About</a>
      <a href = "../" className="text-Links">Skills</a>
      <a href = "../" className="text-Links">Projects</a>
      <a href = "../" className="text-Links">Experience</a>
      <a href = "../" className="text-Links">Contact</a>
      <a href={Pdf} target="_blank" className="text-Links">Resume</a>
      <a
        className="Links"
        href="https://www.linkedin.com/in/adam-oberg-455504187/"
        target="_blank"
        rel="noopener noreferrer"
      >
      <img src={linkedin} className="Icon" alt="linkedin"/>
      </a>
      <a
        className="Links"
        href="https://github.com/obergad"
        target="_blank"
        rel="noopener noreferrer"
      >
      <img src={github} className="Icon" alt="github"/>
      </a>
      </div>
      </header>
    );
}
export default Header;
