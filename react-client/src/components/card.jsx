import React from "react";

function PersonnelCard() {
  return (
    <div className="personnelCard">
      <img
        className="image-profile"
        src="https://scontent.fnbe1-2.fna.fbcdn.net/v/t1.6435-9/137569315_3484102434972766_1393432401429769991_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=DBUUASRWj3EAX-mSVXa&_nc_ht=scontent.fnbe1-2.fna&oh=6ea7c1c08b98423035cf228fad459e78&oe=60A8D791"
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
