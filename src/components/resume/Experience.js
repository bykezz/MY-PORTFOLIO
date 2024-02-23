import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">
            2020 - Present
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Development Experience
          </h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Frontend Engineer"
            subTitle="Seven Star Consultants Limited - (2023 - Present)"
            result="Nigeria"
            des="Seven Star Consultants Limited is a multi-faceted company dedicated to delivering 
            excellence and client satisfaction through high-quality products and services."
          />
          <ResumeCard
            title="Software Engineer"
            subTitle="Sipcon Nigeria Limited - (2020 - 2022)"
            result="Nigeria"
            des="A Construction Company driven by softwares and renders easy quick construction solutions through ICT."
          />
        </div>
      </div>
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">
            2018 - Present
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">Other Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full  border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Affiliate Marketer"
            subTitle="Amazon (2019 - Present)"
            result="USA"
            des="Marketing amazon products on blogs and other Websites hence improving the visiblity of peoples products on amazon."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
