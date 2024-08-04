import React from "react";
import { AiOutlineApi } from "react-icons/ai";
import { FaMobile, FaGlobe } from "react-icons/fa";
import { SiAntdesign } from "react-icons/si";
import { TbWorldCheck } from "react-icons/tb";
import Title from "../layouts/Title";
import Card from "./Card";
import { FaServer } from "react-icons/fa6";

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="Features" des="What I Do" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        <Card
          title="Web Development"
          des="Experienced in building dynamic and responsive web applications using cutting-edge technologies like React, Next, HTML5, CSS3, and JavaScript."
          icon={<TbWorldCheck />}
        />
        <Card
          title="Mobile Development"
          des="Capable of creating cross-platform solutions that deliver a seamless user experience on both iOS and Android platforms using React Native."
          icon={<FaMobile />}
        />
        <Card
          title="Backend Development"
          des="Understands the importance of Agile development structure, organizing database and improving data security while following industrial standards."
          icon={<FaServer />}
        />
        <Card
          title="APIs Integration"
          des="Experienced in integrating APIs to fetch and display data, connect with external services, Familiar with RESTful and GraphQL APIs."
          icon={<AiOutlineApi />}
        />
        <Card
          title="Responsive Designs"
          des="Passionate about creating visually appealing and user-friendly designs that work seamlessly across various devices and screen sizes."
          icon={<SiAntdesign />}
        />
        <Card
          title="Web Hosting"
          des="Experienced in using services like Firebase, Heroku, or AWS to ensure reliable and scalable hosting solutions for web applications."
          icon={<FaGlobe />}
        />
      </div>
    </section>
  );
};

export default Features;
