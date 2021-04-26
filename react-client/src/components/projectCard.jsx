import React from "react";

import projects from "./fakedata.jsx";
import Pagination from "./pagination.jsx";
class ProjectCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      project: projects,
      loading: false,
      currentPage: 1,
      postsPerpage: 3,
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.paginate = this.paginate.bind(this);
  }
  paginate(number){
    this.setState({currentPage: number})
  }
  componentDidMount() {
    this.handleSearch;
  }
  handleSearch(val) {
    const filter = projects.filter((e) => {
      const hashtag = "#" + val;
      return e.techs.includes(hashtag);
    });
    this.setState((this.state.project = filter));
  }

  render() {
    const skills = ["React", "Vue", "Express", "Node"];
    const tech = skills.map((tech, i) => (
      <button
        onClick={() => this.handleSearch(tech)}
        key={i}
        className="teck_button"
      >
        {tech}
      </button>
    ));

    const pro = this.state.project.map((element, i) => (
      <div key={i} className="card_prject">
        <img className="project_img" src={element.imageUrl} />
        <div className="tech_its">
          {element.techs.map((item, i) => (
            <h3 key={i} className="tech_items_tags">
              {item}
            </h3>
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
    const inndexOfLastPost = this.state.currentPage * this.state.postsPerpage;
    const inndexOfFirstpost = inndexOfLastPost - this.state.postsPerpage;
    const currentPost = pro.slice(inndexOfFirstpost, inndexOfLastPost);
    return (
      <div className="big_container">
        <div className="tech">
          <p className="teck_title">Projects({this.state.project.length})</p>
          {tech}
        </div>
        <div className="projectCard">{currentPost}</div>
        <div className="paginate">
        <Pagination postsPerPage={this.state.postsPerpage}  totalPosts={projects.length} paginate={this.paginate}/>
      
        </div>
      
      </div>
    );
  }
}
export default ProjectCard;
