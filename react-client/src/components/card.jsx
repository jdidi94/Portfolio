import React from "react";

function PersonnelCard() {
  return (
    <div className="personnelCard">
      <img
        className="image-profile"
        src="https://www.diethelmtravel.com/wp-content/uploads/2016/04/bill-gates-wealthiest-person.jpg"
      />
      <div className="personnel-container">
        <div className="contact_div">
          <h2 className="title-person">Bill Gates</h2>
          <div className="contact_person">
          <div className="div_span">  <span className="material-icons">markunread</span>
          <h5 className="span_info">hello</h5>
          </div>
            <div className="div_span"><span className="material-icons">call</span>
            <h5 className="span_info">sshshhsshshs</h5>
            </div>
          </div>
        </div>
        <p className="s-paragraph-person">full stack javascript developer</p>
        <p className="x-paragraph-person">
          hi im jdidi im new one in the feild happy to see you all.start-up
          called Virtual-Dawn, developing awesome VR games. I'm also responsible
          for all of my company's web development needs My passion is to use
          technology based solutions, to help solve real world challenges.
        </p>
      </div>
    </div>
  );
}
export default PersonnelCard;
