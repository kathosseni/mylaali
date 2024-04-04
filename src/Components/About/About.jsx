import React from "react";

import des from "../../Assets/img/des.png";
import union from "../../Assets/img/union.png";

const About = () => {
  return (
    <div className="aboutSection bgWhite">
      <div className="sm:px-4 px-2 text-center lg:py-10 py-5 relative overflow-y-hidden">
        <div className="textDiv sm:mx-10 mx-4">
          <h2 className="text-3xl font-extrabold lg:pb-10 pb-5">A propos</h2>
          <div className="lg:text-lg text-base text-justify">
            Laali a été créé par une équipe d'experts : une marketeuse, un
            designer et un codeur, tous passionnés par l'éducation et la
            protection des enfants.
            <br />
            <span className="colorSec italic lg:text-xl text-lg font-semibold">
              Notre objectif:{" "}
            </span>
            Donner aux enfants les outils nécessaires pour se protéger et briser
            le silence face aux violences. À travers un parcours ludique et
            éducatif, les enfants apprennent à :
            <div className="text-start px-2 py-1">
              Reconnaître les situations de violence
              <br /> Comprendre les conséquences de ces violences
              <br /> Dénoncer les abus auprès d'un adulte de confiance
              <br /> Discuter de ces situations avec leurs parents
            </div>
            Rejoignez-nous dans cette aventure ! Ensemble, luttons contre les
            violences faites aux enfants !
          </div>
        </div>

        <div className="imgDiv absolute top-0 sm:left-[-1%] left-0 z-10">
          <img
            src={union}
            alt="Ligne"
            className="img-fluid lg:w-2/3 w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
