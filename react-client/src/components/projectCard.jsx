import React  from "react";

import projects from "./fakedata.jsx";


class ProjectCard extends React.Component {
  constructor(props) {
    super(props);
    this.state={
    search:"",
    project:projects
    };
    this.handleSearch = this.handleSearch.bind(this);
  }
  handleSearch(val){

      // var newArr = []
      // const hashtag="#"+val
 
      // this.state.project.map((e) => {
      //   this.setState({search:val})
   
      //   if (e.skills.includes(hashtag)) {
      //   newArr.push(e)
      //   this.setState({project:newArr})
      //   }
      
      
      // })
      
   
  }
  
  render() {
    const skills = ["React", "Vue", "express", "Node"];
    const tech = skills.map((tech, i) => (
      <button   onClick={this.handleSearch(tech)} key={i} className="teck_button">
        {tech}
      </button>
    ));
    const pro = this.state.project.map((element, i) => (
      <div key={i} className="card_prject">
        <img className="project_img" src={element.imageUrl} />
        <div className="tech_its">
          {element.techs.map((item, i) => (
            <h3 key={i} className="tech_items_tags">#{item}</h3>
          ))}
        </div>
        <h3 className="project_title">{element.title}</h3>
        <p className="project_paragraph">{element.description}</p>
        <div className="project_button">
          <button className="teck_button_relate">Demo</button>
          <button className="teck_button_relate">Code</button>
        </div>
      </div>
    ));
    return (
      <div>
      <div className="tech">
        <p className="teck_title">Projects({skills.length})</p>
        {tech}
      </div>
      <div className="projectCard">{pro}</div>
    </div>
    );
  }
}
export default ProjectCard;
