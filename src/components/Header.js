import React, { useState } from "react";
import github from '../media/github.png';
import linkedin from '../media/linkedin.png';
import '../styles/App.css';
import Pdf from '../media/resume_v1.2.0.pdf';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
function Header() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    return(
      <header className="App-header">
      <a><h1 href = "../" className="header-text">Adam Oberg</h1></a>
      <div className="Icons">
      <a className="text-Links" onClick={handleShow}>Contact</a>
      <a href={Pdf} target="_blank" className="text-Links">Resume</a>
      <a
        className="Links"
        href="https://www.linkedin.com/in/adam-m-oberg/"
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
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Contact Me!</Modal.Title>
        </Modal.Header>
        <Modal.Body>Phone Number: 541-760-4340
        <div>Email Address: <a href="mailto:adam.matthew30@gmail.com">adam.matthew30@gmail.com</a></div>
        <div> LinkedIn:
        <a
          className="contact-button"
          href="https://www.linkedin.com/in/adam-m-oberg/"
          target="_blank"
          rel="noopener noreferrer"
        >
        <img src={linkedin} className="Icon" alt="linkedin"/>
        </a>
        </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      </header>
    );
}
export default Header;
