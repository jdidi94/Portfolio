import React from "react";
// import photo from "./jdidi.png"
function Hobbies () {
const hobb=[{
  image:"https://cdn.digitalsport.co/wp-content/uploads/2018/05/Handball-2.png",
  title:"Handball",
  description:"I was a player in my town team",
},
{
  image:"https://ugolini.co.th/wp-content/uploads/2021/03/89195-complete-guide-of-travel-sites-where-you-can-find-every-detail-of-traveling.jpg",
  title:"Travel",
  description:"It's part of my life",
},
]
const hobbies  = hobb.map((element, i) => (
  <div key={i} className="hobbies-item">
  <img className="hobbies-image" src={element.image}/>
  <h5 className="hobbies-item-title">{element.title}</h5>
  <p className="hobbies-item-description">{element.description}</p>
</div>
));
  return (
    <div className="hobbies">
       <h3 className="hobbies-title">Hobbies</h3>
       
       <div className="hobbies-list">
  
   {hobbies}
       
       </div>
    </div>
  );
}
export default Hobbies;