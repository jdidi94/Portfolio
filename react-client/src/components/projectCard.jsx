import React from "react";

function ProjectCard() {
  return (
    <div className="projectCard">
      <div className="card_prject">
        <img
          className="project_img"
          src="https://image.shutterstock.com/z/stock-photo-responsive-web-design-on-mobile-devices-phone-laptop-and-tablet-pc-288954107.jpg"
        />
        <div className="tech-items">
          <h3 className="tech_items_tags">CSS</h3>
          <h3  className="tech_items_tags">CSS</h3>
          <h3  className="tech_items_tags">CSS</h3>
        </div>
        <h3 className="project-title">Tunisian fann</h3>
        <p className="project_paragraph">
          If you’re confused about how to write your meta descriptions, you’re
          not the only one. To help remove that confusion, I’m going to dig into
          what makes a great meta description and share 15 killer meta
          description examples.
        </p>
        <div className="project_button">
          <button className="teck_button">hellloooooo </button>
          <button className="teck_button">Button</button>
        </div>
      </div>
    </div>
  );
}
export default ProjectCard;
