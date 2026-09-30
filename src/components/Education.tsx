import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";
import { fadeInUp, staggerContainer } from "../utils/motionAnimations";

const Education = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="initial"
      animate="animate"
      className="w-full flex flex-col lgl:flex-row gap-6 lgl:gap-20"
    >
      <motion.div variants={fadeInUp}>
        <div className="py-4 sm:py-6 lgl:py-12 font-titleFont flex flex-col gap-2 sm:gap-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
      </motion.div>

      <motion.div
        variants={fadeInUp}
        className="mt-4 sm:mt-6 lgl:mt-14 w-full border-l-[4px] sm:border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-6 sm:gap-10"
      >
        <ResumeCard
          title="BS DATA SCIENCE"
          subTitle="SUPERIOR UNIVERSITY"
          result="3.71/4"
          des="Doing bachelor's degree in data science is a great way to start your career in the field of data science. It provides you with the necessary skills and knowledge to work with data."
        />
        <ResumeCard
          title="A LEVEL"
          subTitle="LAHORE GRAMMAR SCHOOL"
          result="A GRADE"
          des="Done A level with 3 major subjects, which are Mathematics, Physics and Computer Science."
        />
        <ResumeCard
          title="O LEVEL"
          subTitle="GRAND CHARTER SCHOOL"
          result="A GRADE"
          des="Done O level with Science subjects, which are Physics, Chemistry and Computer Science."
        />
      </motion.div>
    </motion.div>
  );
};

export default Education;
