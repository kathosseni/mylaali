import React from "react";

import whitelogo from "../../Assets/img/whitelogo.png";

import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footerSection bgSec">
      <div className="sm:px-4 px-2 lg:py-10 py-5 sm:mx-10 mx-4 text-white text-footer">
        <div className="brandingFooter grid grid-cols-3">
          <div className="">
            <img src={whitelogo} alt="" className="w-1/3" />
            <div className="py-1 ">
              Sensibiliser, Eduquer
              <br />
              et Protéger
            </div>
            <div className="flex social-icons space-x-2 sm:space-x-4 py-1">
              <FaFacebook />
              <FaTwitter />
              <FaInstagram />
            </div>
          </div>
        </div>
        <div className="border-b-2 border-white-400 w-full my-1"></div>
        <div className="footer-content flex justify-between items-center">
          <p className="">©2024-Laali</p>
          <a href="">Termes&Conditions</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
