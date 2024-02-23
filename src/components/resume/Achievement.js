import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">
            2016 - Present
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Development Achievements
          </h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Project Management Professional"
            subTitle="Skills Edge, Abuja, Nigeria. (2021)"
            result="Success"
            des="Completed a full course training on Project Management at Skills Edge in abuja."
          />
          <ResumeCard
            title="Java Certified."
            subTitle="Aditya College of Engineering, Andhra Pradesh, India. (2017)"
            result="Success"
            des="Completed a code training course on java programming."
          />
          <ResumeCard
            title="Oracle Certified"
            subTitle="Caritas University, Enugu, Nigeria. (2016)"
            result="Success"
            des="Completed a full course training on Oracle database 11g at Caritas University Enugu."
          />
        </div>
      </div>
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">
            2020-Present
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">Other Achievements</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Health, Safety and Environment (LEVEL-2)"
            subTitle="Skills Edge, Abuja, Nigeria. (2021)"
            result="Success"
            des="Completed a full course training on HSE-2 at Skills Edge in abuja."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
