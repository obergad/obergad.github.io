import React from "react";
import logo from '../media/me3.jpg';
import '../styles/App.css';

function Home() {
    return(
      <div className="App-body">
      <p  className="homeText">This website is still under construction as of July 2022</p>
      <p  className="homeText">Some buttons and links may not work</p>
      <img src={logo} className="profile-picture" alt="profilepic"/>
      <p className="homeText">
        Hi, I'm Adam.
      </p>
      <p className="homeText">
        Undergrad Computer Science Student at Oregon State University
      </p>
      </div>
    );
}
export default Home;
