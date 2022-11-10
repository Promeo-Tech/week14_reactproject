import React from "react";
import Rating from "./RateStars";


//this is my code to create the card itself
  


function Card(props) {
    return (
        <div className="card">
            <div className="card__body">
                <img className="card__image" src={props.img}/>
                <h2 className="card__title">{props.title}</h2>
                <p className="card__description">{props.description}</p>
            </div>
            <div className="rating">  <Rating />
            
            <form>
  <label>
    Comment:
    <input id="input" type="text" name="name" />
  </label>
  <input type="submit" value="Submit" />
</form> 
</div>
        </div>
        
    )
};


export default Card;