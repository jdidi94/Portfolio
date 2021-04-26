import React from "react";

function Skills() {
  const technologies = [
    {
      tech: "React",
      power: "90%",
    },
    {
      tech: "Vue",
      power: "90%",
    },
    {
      tech: "Angular",
      power: "60%",
    },
    {
      tech: "Html/Css",
      power: "80%",
    },
    {
      tech: "Node.js",
      power: "90%",
    },
    {
      tech: "Express",
      power: "90%",
    },
    {
      tech: "Mysql",
      power: "90%",
    },
    {
      tech: "MongoDB",
      power: "90%",
    },
 
  ];
  const skill = technologies.map((element, i) => (
    <div key={i} className="skills-inline">
      {element.tech}
    </div>
  ));
  const percentage = technologies.map((element, i) => (
    <div key={i} className="progress">
      <div
        className="progress-bar"
        role="progressbar"
        style={{ width: element.power }}
        aria-valuenow="0"
        aria-valuemin="5"
        aria-valuemax="100"
      ></div>
    </div>
  ));
  return (
    <div className="skills">
      <div className="skills-title">Skills</div>
      <div className="all-skills">
        <div className="skills-names">{skill}</div>

        <div className="skills-container">{percentage}</div>
      </div>
    </div>
  );
}
export default Skills;
