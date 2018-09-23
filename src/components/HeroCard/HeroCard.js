import React from "react";
import "./HeroCard.css";

const DogCard = props => {
  // console.log(props);
  return (
  <div className="card" >
    <div className="img-container" onClick={() => props.selectHero(props.hero)}>
      <img alt={props.hero} src={props.image} />
    </div>
    <div className="content" onClick={() => props.removeDog(props.hero)} >
      <ul>
        <li>
          <strong>Hero:</strong> {props.hero}
        </li>
        
      </ul>
    </div>
 
  </div>
  )}
;

export default DogCard;