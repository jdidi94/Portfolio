import React from "react";

function Skills() {
  return (

    <div className="skills">
      <div className="skills-title">FRONT END</div>
      <div className="all-skills">
      <div className="skills-names">
        <div className="skills-inline">react</div>
        <div className="skills-inline">react</div>
        <div className="skills-inline">react</div>
        <div className="skills-inline">react</div>
        <div className="skills-inline">react</div>
        
        </div>
   
       <div className="skills-container">
  
          <div className="progress">
            <div
              className="progress-bar"
              role="progressbar"
              style={{ width: "11%" }}
              aria-valuenow="0"
              aria-valuemin="5"
              aria-valuemax="100"
            >
          </div>
   
      </div>
    
      <div className="progress">
        <div
          className="progress-bar"
          role="progressbar"
          style={{ width: "11%" }}
          aria-valuenow="25"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
 
      </div>

      <div className="progress">
        <div
          className="progress-bar"
          role="progressbar"
          style={{ width: "25%" }}
          aria-valuenow="50"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
      <div className="progress">
        <div
          className="progress-bar"
          role="progressbar"
          style={{ width: "25%" }}
          aria-valuenow="75"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
      <div className="progress">
        <div
          className="progress-bar"
          role="progressbar"
          style={{ width: "25%" }}
          aria-valuenow="100"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
    </div>
    </div>

  
    </div>
  );
}
export default Skills;
