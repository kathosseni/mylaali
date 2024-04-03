import React from "react";

import des from "../../Assets/img/des.png";
import union from "../../Assets/img/union.png";

const About = () => {
  return (
    <div className="aboutSection bgWhite">
      <div className="sm:px-4 px-2 text-center lg:py-10 py-5 relative overflow-y-hidden">
        <div className="textDiv sm:mx-10 mx-4">
          <h2 className="text-3xl font-extrabold lg:pb-10 pb-5">A propos</h2>
          <p className="lg:text-lg text-base text-justify">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure
            ducimus, facilis, necessitatibus ipsa optio in veniam illum modi
            nobis, sequi nam? Aliquid aliquam rem velit minima quae sapiente
            adipisci in! Lorem ipsum dolor sit, amet consectetur adipisicing
            elit. Iure ducimus, facilis, necessitatibus ipsa optio in veniam
            illum modi nobis, sequi nam? Aliquid aliquam rem velit minima quae
            sapiente adipisci in! Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Iure ducimus, facilis, necessitatibus ipsa optio
            in veniam illum modi nobis, sequi nam? Aliquid aliquam rem velit
            minima quae sapiente adipisci in
          </p>
        </div>
        {/* <div className="imgDiv absolute lg:top-[-20%] left-[10%] top-[-10%] md:left-[-5.5%]  z-30">
          <img src={des} alt="Dés" className="img-fluid lg:w-2/3 w-1/3" />
        </div> */}
        <div className="imgDiv absolute top-0 left-[-1%] z-10">
          <img src={union} alt="Ligne" className="img-fluid lg:w-2/3 w-1/2 h-full" />
        </div>
      </div>
    </div>
  );
};

export default About;
