import React from "react";
import '../styles/Skills.css';
import skills from '../data/skills.json';


const Skills = ({refr}) => {
    return(
      <div className="Skills-body" ref = {refr}>
        <div className="Skills-Header"> Skills</div>
        <div className="Skills-container">
        {
          skills.map(skill => {
            return(

              <div className="Skill-box" key={skill.id}  >
              <button className="button" type="button" style= {{backgroundImage: `url(${skill.image})`}} data-hover={skill.description} data-active="I'M ACTIVE"><span>{skill.name}</span></button>
              </div>
            )
          })
        }
        </div>
      </div>
    );
}
export default Skills;
