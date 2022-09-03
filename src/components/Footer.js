import React, { useState } from "react";
import '../styles/Footer.css';
import github from '../media/github.png';
import linkedin from '../media/linkedin.png';
import Pdf from '../media/Resume.pdf';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
function Home() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
            <a className="Footer-Link" onClick={handleShow}>Contact</a>
            <a href={Pdf} target="_blank"  className="Footer-Link">Resume</a>
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
      </div>

    );
}
export default Home;
