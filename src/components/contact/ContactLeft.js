import React from "react";
import { FaInstagram, FaXTwitter, FaLinkedinIn } from "react-icons/fa6";
import { contactImg } from "../../assets/index";

const ContactLeft = () => {
  const instagramProfileUrl = "https://www.instagram.com/bykezz/";
  const xProfileUrl = "https://twitter.com/bykezzzz";
  const linkedInProfileUrl =
    "https://www.linkedin.com/in/pascal-ugwu-211113221/";

  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Pascal Ugwu</h3>
        <p className="text-lg font-normal text-gray-400">
          Full-stack Developer
        </p>
        <p className="text-base text-gray-400 tracking-wide">
          You can always trust your projects are in safe and competent hands
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+2347013327924</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email:{" "}
          <span className="text-lightText">chibuikepascal31@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me on</h2>
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
    </div>
  );
};

export default ContactLeft;
