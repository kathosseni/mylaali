import React from "react";
import "./Card.css";

import card from "../../Assets/img/card.png";

const Card = () => {
  return (
    <div className="cardSection relative bg-black bg-opacity-50 ">
      <img
        src={card}
        alt="Card Bg"
        className="w-full h-full object-cover absolute inset-0"
      />
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <div className="flex h-full relative">
        <div className="sm:px-4 px-2 lg:py-10 py-5 sm:mx-10 mx-4 tracking-wider text-white items-center">
          <div className="sm:px-10 px-0">
            Protéger nos enfants, c'est notre devoir ! Laali est un jeu de
            parcours éducatif et ludique qui permet aux enfants de 7 à 12 ans de
            comprendre et de reconnaître les Violences Basées sur le Genre
            (VBG).
            <br />
            Plus qu'un jeu, c'est un engagement pour un monde sans violence où
            chaque enfant a le droit de grandir en sécurité et dans le respect.
          </div>
          <div className="flex items-center justify-center  py-2  md:py-4">
            <button className="text-white text-center py-2 px-3 rounded-lg bgSec">
              <a href="#" className="md:flex">
                Commander
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
