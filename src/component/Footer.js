import React from "react";
import { Typography } from "@material-tailwind/react";
import {
  FaInstagram,
  FaFacebook,
  FaWhatsapp,
  FaLinkedin,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="w-full p-8 mt-4 bg-green-100 ">
        <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 text-center md:justify-between">
          <h3 className="text-lg font-semibold">LOUD Coders</h3>
          <div className="flex flex-wrap items-center gap-y-2 gap-x-8">
            <Link to="/">
              <Typography
                color="blue-gray"
                className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
              >
                Home
              </Typography>
            </Link>
            <Link to="/About">
              <Typography
                color="blue-gray"
                className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
              >
                About
              </Typography>
            </Link>

            <Link to="/Services">
              <Typography
                color="blue-gray"
                className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
              >
                Services
              </Typography>
            </Link>
          </div>
        </div>
        <hr className="my-8 border-teal-500" />
        <Typography
          color="blue-gray"
          className="flex align-middle justify-between font-normal"
        >
          &copy; 2023 Loud coders , All rights reserved
          <div className="flex">
            <a href="https://instagram.com/loudcoders?igshid=MzRlODBiNWFlZA==" target="Instagram">
              <FaInstagram className="text-xl cursor-pointer mx-4" />
            </a>
            <FaFacebook className="text-xl cursor-pointer mx-4" />
            <FaWhatsapp className="text-xl cursor-pointer mx-4" />
            <a href="https://www.linkedin.com/in/loud-coders-49b466289" target="Linkdin">
              <FaLinkedin className="text-xl cursor-pointer mx-4" />
            </a>
          </div>
        </Typography>
      </footer>
    </>
  );
};

export default Footer;
