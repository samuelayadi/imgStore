import React from "react";
import { AiFillYoutube } from "react-icons/ai";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { ImFacebook2 } from "react-icons/im";
import { Link } from "react-router-dom";

const Footer = () => {
    const date= new Date
    const year = date.getFullYear()
  return (
    <footer className="py-2 border-t border-grey mt-10">
      <div className="my-5 flex flex-col justify-center items-center space-y-6">
        <Link to="#" className="text-xl text-secondary">
          Img<span className="text-primary">Store</span>
        </Link>
        <div className="space-x-8 text-2xl">
          <button className="">
            <ImFacebook2 />
          </button>
          <button className="">
            <BsInstagram />
          </button>
          <button className="">
            <BsTwitter />
          </button>
          <button className="">
            <AiFillYoutube />
          </button>
        </div>

        <div className="flex flex-col space-y-3 sm:space-y-0 sm:flex-row sm:space-x-8">
          <a href="" className="text-center">
            Conditions of Use
          </a>
          <a href="" className="text-center">
            Privacy & Policy
          </a>
          <a href="" className="text-center">
            Press Room
          </a>
        </div>

        <div className="text-grey3">&copy;{year} ImgStore by Ayadi Samuel</div>
      </div>
    </footer>
  );
};

export default Footer;
