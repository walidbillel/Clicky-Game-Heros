import React from "react";
import "./DogCard.css";

const DogCard = props => {
  console.log(props);
  return (
  <div className="card" >
    <div className="img-container" onClick={() => props.removeDog(props.breed)}>
      <img alt={props.breed} src={props.image} />
    </div>
    <div className="content" onClick={() => props.removeDog(props.breed)} >
      <ul>
        <li>
          <strong>Breed:</strong> {props.breed}
        </li>
        
      </ul>
    </div>
    <span onClick={() => props.removeDog(props.breed)} className="remove">
      𝘅
    </span>
  </div>
  )}
;

export default DogCard;