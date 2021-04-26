import React from "react";

function Experience() {
  const data = [
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Qatar_Rail_logo.svg/1200px-Qatar_Rail_logo.svg.png",
      date: "Jun 18 - Feb 20",
      title: "Customer experience agent",
      paragraph:
        "In that period working in qatar, I have been well trained to respond and handle customer issues and to follow the safety critical",
    },
    {
      image:
        "https://www.legal500.com/gc-powerlist/wp-content/uploads/sites/4/2019/05/mh-alshaya-300x300.jpg",
      date: "Jan 17 - March 18",
      title: "Customer service associate ",
      paragraph:
        "I spent one (1) year and 3 months as a customer service associate in one of the biggest company in the middle East ALSHAYA COMPANY .",
    },
  ];
  const expo = data.map((element) => (
    <div className="experience-item">
    <img
      className="experience-image"
      src={element.image}
    />
    <div className="experience-description">
      <h5 className="experience-date">{element.date}</h5>
      <h3 className="experience-title">{element.title}</h3>
      <p className="experience-paragraph">
        {element.paragraph}
      </p>
    </div>
  </div>
 
  ));

  return (
    <div className="experience">
      <h3 className="hobbies-title">Experience</h3>
      <div className="experience-container">
       {expo}
      </div>
    </div>
  );
}
export default Experience;
