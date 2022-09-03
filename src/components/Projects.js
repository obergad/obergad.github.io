import React from "react";
import '../styles/Projects.css';
import projects from '../data/projects.json';

const Projects = ({refr}) => {
    return(
      <div className="Projects-body" ref = {refr}>
        <div className="Projects-Header">Projects</div>
        <div className="Projects-container">
        {
          projects.map((project, index) => {
            return(
              <div className="Project-box" key={index}>
              <h2 className="Project-Title"> {project.name} </h2>
              <div className="Left-column">
              <div>
              <iframe
                  className="Project-Video"
                  src= {project.youtubeLink}
                  frameborder="0"
                  allow="autoplay; encrypted-media"
                  allowfullscreen = "true"
                  title="video"
                  />{" "}
              </div>
              <div className="Project-description"> {project.description}</div>

              </div>
              <div className="Credits-Container">
                <div className="Credits-title">Credits</div>

                {project.credits.map((credit, index) =>{
                  return(
                    <div className="Credits-body" key={index}>
                    <div className="Credit-name">Name: {credit.name}</div>
                    <div className="Credit-role">Role: {credit.role}</div>
                    <div className="Credit-email">Email: {credit.email} </div>
                    </div>
                  )
                })}
              </div>
              </div>
            )
          })
        }
        </div>
      </div>
    );
}
export default Projects;
