import React from "react";

function Post() {
  return (
    <div className="post">
      <div className="up-post">
        <div className="up-post-layout">
          <h5 className="title-post" >blog</h5>
          <p className="paragraph-post">The new earth</p>
        </div>
        <img className="img-post" src="https://miro.medium.com/max/700/1*_IGyU6qLYRVx4uKKCPVJFg.jpeg" />
      </div>
      <div className="down-post"></div>
      <p className="paragraph-post-down">
      If I have all the technologies in the world, my first and last mission is to find another earth in the universe...<a href="https://jdididaoud404.medium.com/the-new-earth-a9b8f6e28e98" className="meduim">Meduim</a>
      </p>
    </div>
  );
}
export default Post;
