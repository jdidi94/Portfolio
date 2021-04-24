import React from "react";
// import photo from "./jdidi.png"
function Hobbies () {
  return (
    <div className="hobbies">
       <h3 className="hobbies-title">Hobbies</h3>
       
       <div className="hobbies-list">
         <div className="hobbies-item">
           <img className="hobbies-image" src="https://wearesocial-net.s3.amazonaws.com/wp-content/uploads/2020/11/gamer_room.jpg"/>
           <h5 className="hobbies-item-title">gaming</h5>
           <p className="hobbies-item-description">here the new game.</p>
         </div>
         <div className="hobbies-item">
           <img className="hobbies-image" src="https://wearesocial-net.s3.amazonaws.com/wp-content/uploads/2020/11/gamer_room.jpg"/>
           <h5 className="hobbies-item-title">gaming</h5>
           <p className="hobbies-item-description">here the new game.</p>
         </div>
       
       </div>
    </div>
  );
}
export default Hobbies;