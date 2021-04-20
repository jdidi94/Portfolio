import React from "react";

function Cards() {
  return (
    <div className="first-card">
      <div className="cards">
        <div className="card active" id="overview">
          <a className="card-toggle">
            <i className="fa fa-arrow-circle-left"></i>
          </a>
          <div className="card-content">
            <div className="row">
              <div className="left col">
                <h2>
                  Personal <strong>Social Card</strong>
                </h2>

                <p>
                  Click one of the social icons below to switch between card or
                  click Contact Me link to show the contact form card. <br />
                  <em>
                    Make sure you're running this experiment in the latest
                    Chrome browser.
                  </em>
                </p>
              </div>
              <div className="right col"></div>
            </div>
          </div>
        </div>

        <div className="card" id="dribbble">
          <a className="card-toggle">
            <i>
              <span className="fa fa-dribbble"></span>
            </i>
          </a>
          <div className="card-content">
            <div className="row">
              <div className="left col"></div>
            </div>
          </div>
        </div>

        <div className="card" id="behance">
          <a className="card-toggle">
            <i>
              <span className="fa fa-behance"></span>
            </i>
          </a>
        </div>
        <div className="card" id="linkedin">
          <a className="card-toggle">
            <i>
              <span className="fa fa-linkedin"></span>
            </i>
          </a>
        </div>
        <div className="card" id="twitter">
          <a className="card-toggle">
            <i>
              <span className="fa fa-twitter"></span>
            </i>
          </a>
        </div>
      </div>
    </div>
  );
}
export default Cards;
