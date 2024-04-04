import React from "react";

import girl from "../../Assets/img/girl.png";

const Rules = () => {
  return (
    <div className="ruleSection relative bgWhite bg-opacity-50 ">
      <img
        src={girl}
        alt="Bg"
        className="w-full h-full object-cover absolute inset-0"
      />
      <div className="absolute inset-0 bg-white bg-opacity-80"></div>
      <div className="flex h-full relative">
        <div className="sm:px-4 px-2 lg:py-10 py-5 sm:mx-10 mx-4 tracking-wider text-black">
          <h2 className="text-3xl text-center font-extrabold lg:pb-10 pb-5">
            Règles du jeu
          </h2>
          <div className="ruleText sm:grid sm:grid-cols-2 gap-10 lg:text-lg text-base">
            <p className="py-2">
              <span className="text-lg font-semibold">Composition</span><br />
              La boite du jeu Laali comprend :
              <br />
              <span className="colorSec">- </span>Un plateau de jeu avec sur
              chaque case des illustrations et des textes descriptifs de chaque
              situation.
              <br />
              <span className="colorSec">- </span>Les cartes{" "}
              <span className="colorSec">mon super pouvoir</span> qui
              correspondent aux cases du parcours. Chaque apporte une bonne
              réponse et la bonne attitude à avoir face à chaque situation.
              <br />
              <span className="colorSec">- </span>Une deuxième lot de cartes
              avec des images illustratives des cas de violences basées sur le
              genre à montrer aux enfants. Les parents peuvent utiliser les
              cartes et engager le débat avec leur enfants.
            </p>

            <p className="py-2">
              <span className="text-lg font-semibold">Déroulement</span><br />
              Le jeu se joue à 2 minimum et à 4 maximum. Il y a un maître du jeu
              qui est chargé de diriger le jeu et d'attribuer les points à
              chaque joueur.
              <br />
              <span className="colorSec">- </span>Chaque joueur commence le jeu
              en lançant les dés et avance du nombre de points obtenus.
              <br />
              <span className="colorSec">- </span>Sur chaque case se trouve un
              message, le joueur lit le message et le maître du jeu l'invite à
              donner la bonne attitude dans la situation décrite.
              <br />
              <span className="colorSec"> ° </span>Si le joueur donne la bonne
              réponse il gagne un point.
              <br />
              <span className="colorSec"> ° </span>Si il donne un mauvaise
              réponse, il n'a aucun point.
              <br />
              <span className="colorSec">- </span>Le joueur avec le plus de
              points à avoir terminé le circuit gagne la partie.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rules;
