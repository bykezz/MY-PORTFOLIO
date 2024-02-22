import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaInstagram, FaLinkedinIn, FaReact } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiTailwindcss, SiFigma, SiNextdotjs } from "react-icons/si";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: [
      "A Professional Coder.",
      "A Frontend Developer.",
      "with Keen Eyes for Responsive Designs.",
    ],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  const instagramProfileUrl = "https://www.instagram.com/bykezz/";
  const xProfileUrl = "https://twitter.com/bykezzzz";
  const linkedInProfileUrl =
    "https://www.linkedin.com/in/pascal-ugwu-211113221/";

  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">YOU'VE FOUND ME</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm{" "}
          <span className="text-designColor capitalize">Pascal Ugwu</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          An Experienced Front-end Engineer Proficient in developing web
          applications using Java, JavaScript, HTML5, CSS3, MySQL, Typescript,
          React JS, Next JS and Tailwind CSS. A certified project management
          professional with a strong understanding of responsive design,
          cross-browser compatibility, and user experience. Adept at working in
          fast-paced, deadline-driven environments, and collaborating with
          cross-functional teams to deliver innovative solutions.
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
            <a
              href={instagramProfileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bannerIcon"
            >
              <FaInstagram />
            </a>
            <a
              href={xProfileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bannerIcon"
            >
              <FaXTwitter />
            </a>
            <a
              href={linkedInProfileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bannerIcon"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <SiNextdotjs />
            </span>
            <span className="bannerIcon">
              <SiTailwindcss />
            </span>
            <span className="bannerIcon">
              <SiFigma />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBanner;
