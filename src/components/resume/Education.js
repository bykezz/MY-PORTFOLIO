import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2008 - 2020</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full  border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="B.Tech in Electrical and Electronics Engineering"
            subTitle="Jawaharlal Nehru Technological University India (2016 - 2020)"
            result="7.34"
            des="Completed a comprehensive Bachelor's degree in Electrical and Electronics Engineering with a focus on acquiring in-depth knowledge of electrical systems, electronics, and their applications. Demonstrated strong analytical and problem-solving skills through academic achievements, with a notable GPA of 7.34."
          />

          <ResumeCard
            title="Secondary School Education"
            subTitle="Ave-Maria College (2008 - 2014)"
            result="5.00/5"
            des="Successfully completed secondary education at Ave-Maria College with a strong emphasis on academic excellence and personal development. 
            Demonstrated consistent dedication to learning, resulting in an outstanding academic performance with a remarkable GPA of 5.00 out of 5.00."
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">
            2020 - Present
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full  border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Frontend Developer"
            subTitle="Seven Star Consultants Limited - (2023 - Present)"
            result="Nigeria"
            des="Seven Star Consultants Limited is a multi-faceted company dedicated to delivering excellence and client satisfaction through high-quality products and services."
          />
          <ResumeCard
            title="Software Engineer"
            subTitle="Sipcon Nigeria Limited - (2020 - 2022)"
            result="Nigeria"
            des="A Construction Company driven by softwares and renders easy quick construction solutions through ICT."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
