import React from "react";

function Post() {
  return (
    <div className="post">
      <div className="up-post">
        <div className="up-post-layout">
          <h5 className="title-post" >blog</h5>
          <p className="paragraph-post">the coffe in the morning</p>
        </div>
        <img className="img-post" src="https://www.cancer.org/content/dam/cancer-org/images/photographs/single-use/espresso-coffee-cup-with-beans-on-table-restricted.jpg" />
      </div>
      <div className="down-post"></div>
      <p className="paragraph-post-down">
        Mix things up with delicious coffee drinks for any and every
        occasion — or just because!
        All you need is a Folgers® coffee recipe and a few simple
        ingredients to be your own barista.
      </p>
    </div>
  );
}
export default Post;
