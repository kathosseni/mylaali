import React from "react";
import './Card.css'

import card from "../../Assets/img/header.png";

const Card = () => {
  return (
    <div className="cardSection">
      <div className="pl-4 ml-10 flex md:py-10 py-5">
        <div className="cardImg basis-1/2">
          <div className="imgDiv">
            <img src={card} alt="Carte" className="img-fluid w-1/3" />
          </div>
        </div>
        <div className="cardText basis-1/2">

        </div>
      </div>
    </div>
  );
};

export default Card;
