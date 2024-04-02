import React from "react";
import "./Header.css";

import header from "../../Assets/img/header.png";
import des from "../../Assets/img/des.png";
import chess from "../../Assets/img/chess.png";

const Header = () => {
  return (
    <div className="headerSection bgPale">
      <div className="pl-4 ml-10 flex md:mt-8 mt-4 relative">
        <div className="rightDiv w-full md:w-[50%] pr-4 py-4 items-center justify-center ">
          <div className="text-sm font-semibold lg:py-10 py-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </div>
          <h1 className="xl:text-5xl text-2xl uppercase font-extrabold">
            Lorem ipsum dolor <br />
            sit amet consectetur
          </h1>
          <p className="lg:text-lg text-base lg:py-10 py-5">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel porro
            impedit laboriosam, at consequatur similique aut commodi maiores
            quod doloremque id quos. Molestiae, consequatur. Voluptate at magnam
            doloremque omnis officia?
          </p>
        </div>
        <div
          className="leftDiv bgPrim md:block hidden md:w-[50%] 
          ml-8 lg:mt-[50px] mt-[80px] rounded-bl-[100px] rounded-tl-[20px] relative"
        >
          <div className="imgDiv absolute left-[-50px] top-[-160px] md:top-[-168px] ">
            <img
              src={header}
              alt="Laali Packaging"
              className="img-fluid w-[650px]"
            />
          </div>
          <div className="imgDiv absolute bottom-0 left-[20%] ">
            <img src={des} alt="Dés" className="img-fluid w-1/3" />
          </div>
          <div className="imgDiv absolute bottom-0 left-[80%]">
            <img src={chess} alt="Chess Pins" className="img-fluid" />
          </div>
        </div>

        <div className="imgDiv absolute left-[-7%] top-[85%]">
          <img src={des} alt="Dés" className="img-fluid lg:w-2/3 w-1/3" />
        </div>
      </div>
    </div>
  );
};

export default Header;
