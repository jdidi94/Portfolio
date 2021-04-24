import React from "react";
import photo from "../../dist/jdidi.png"

function PersonnelCard() {
  return (
    <div className="personnelCard">
      <img
        className="image-profile"
        src="./jdidi.png"
      />
      <div className="personnel-container">
        <div className="contact_div">
          <h2 className="title-person">Bill Gates</h2>
          <div className="contact_person">
            <div className="div_span">
              {" "}
              <span className="material-icons">markunread</span>
              <h5 className="span_info">hello</h5>
            </div>
            <div className="div_span">
              <span className="material-icons">call</span>
              <h5 className="span_info">sshshhsshshs</h5>
            </div>
          </div>
        </div>
        <p className="s-paragraph-person">full stack javascript developer</p>
        <p className="x-paragraph-person">
          Recent full Stack JavaScript developer graduate for developing web
          applications, I've built tow web applications from the ground-up
          ,Intellectually curious and passionate to learn, i want to start my
          career and extend my knowledge.
        </p>
      </div>
    </div>
  );
}
export default PersonnelCard;
