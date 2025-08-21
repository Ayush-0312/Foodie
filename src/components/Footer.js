import React from "react";
import { AVATAR, INSTAGRAM, PORTFOLIO, X } from "../utils/constants";
import { FaGithub, FaXTwitter } from "react-icons/fa6";
import { GITHUB, LINKEDIN } from "../utils/constants";
import { FaLinkedin } from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";

const Footer = () => {
  const handleAvatarClick = () => {
    window.open(PORTFOLIO, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="mt-auto flex bg-pink-200 px-5 py-3 justify-between">
      <div>
        <span className="text-2xl font-bold text-gray-800">FOODIE</span>
      </div>
      <div className="flex space-x-3">
        <span className="font-semibold text-lg">Created by Ayush Gupta</span>
        <div onClick={handleAvatarClick}>
          <img
            className="w-8 rounded-xl cursor-pointer"
            src={AVATAR}
            alt="avatar"
          />
        </div>
        <a href={GITHUB} target="_blank" rel="noopener noreferrer">
          <FaGithub size={30} />
        </a>
        <a href={LINKEDIN} target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={30} />
        </a>
        {/* <a href={X} target="_blank" rel="noopener noreferrer">
          <FaXTwitter size={30} />
        </a>
        <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer">
          <LuInstagram size={30} />
        </a> */}
      </div>
    </div>
  );
};

export default Footer;
