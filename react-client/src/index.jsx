import React from "react";
import ReactDOM from "react-dom";
import PersonnelCard from "./components/card.jsx";
import Post from "./components/posts.jsx";
import Hobbies from "./components/hobbies.jsx";
import ProjectCard from "./components/projectCard.jsx";
import Skills from "./components/skills.jsx";
import Tech from "./components/tech.jsx";
import Experience from "./components/experience.jsx";

// import photo from "./components/jdidi.png"
class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <PersonnelCard />
        </div>
        <div className="row">
          <Skills />
          <Experience />
        </div>
        <div className="row">
          <Post />
          <Hobbies />
        </div>

        <div className="row">
          <ProjectCard />
        </div>
        <footer>
          <p>created by jdidi daoud-devchallenges.io</p>
        </footer>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
