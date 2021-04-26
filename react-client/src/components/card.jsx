import React from "react";


function PersonnelCard() {
  
const info = [
  {
    name: "Jdidi Daoud",
    title: "Full Stack Javascript Developer",
    email: "jdididaoud404@gmail.com",
    number: "+216 27 334 774",
    description:
      "Recent full Stack JavaScript developer graduate for developing web applications, I've built tow web applications from the ground-up ,Intellectually curious and passionate to learn, i want to start my career and extend my knowledge.",
  },
];
  return (
    <div className="personnelCard">
      <img
        className="image-profile"
        src="./jdidi.jpg"
      />
      <div className="personnel-container">
        <div className="contact_div">
          <h2 className="title-person">Jdidi Daoud</h2>
          <div className="contact_person">
            <div className="div_span">
              {" "}
              <span className="material-icons">markunread</span>
              <h5 className="span_info">jdididaoud404@gmail.com</h5>
            </div>
            <div className="div_span">
              <span className="material-icons">call</span>
              <h5 className="span_info">+216 27 334 774</h5>
            </div>
          </div>
        </div>
        <p className="s-paragraph-person">Full Stack Javascript Developer</p>
        <p className="x-paragraph-person">
          Recent full Stack JavaScript developer graduate for developing web
          applications, I've built tow web applications from the ground-up,
          Intellectually curious and passionate to learn, I want to start my
          career and extend my knowledge.
        </p>
      </div>
    </div>
  );
}
export default PersonnelCard;
