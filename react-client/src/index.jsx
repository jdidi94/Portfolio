import React from "react";
import ReactDOM from "react-dom";
import Cards from  "./components/card.jsx"

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-default navbar-fixed-top navbar-shrink">
          <div className="container">
            <div className="navbar-header page-scroll">
              <button
                type="button"
                className="navbar-toggle"
                data-toggle="collapse"
                data-target="#bs-example-navbar-collapse-1"
              >
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand page-scroll" href="#page-top">
                Celine Is Awesome
              </a>
            </div>

            <div
              className="collapse navbar-collapse"
              id="bs-example-navbar-collapse-1"
            >
              <ul className="nav navbar-nav navbar-right">
                <li className="hidden active">
                  <a href="#page-top"></a>
                </li>
                <li className="">
                  <a className="page-scroll" href="#services">
                    Services
                  </a>
                </li>
                <li className="">
                  <a className="page-scroll" href="#portfolio">
                    Portfolio
                  </a>
                </li>
                <li className="">
                  <a className="page-scroll" href="#about">
                    About
                  </a>
                </li>
                <li className="">
                  <a className="page-scroll" href="#team">
                    Team
                  </a>
                </li>
                <li className="">
                  <a className="page-scroll" href="#contact">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <header>
          <div className="container">
            <div className="intro-text">
              <div className="intro-lead-in">Welcome</div>
              <div className="intro-heading">
               Jdidi Daoud 
              </div>
              <a href="#services" className="page-scroll btn btn-xl">
                Full Stack javascript developer
              </a>
            </div>
          </div>
        </header>
        <Cards/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
