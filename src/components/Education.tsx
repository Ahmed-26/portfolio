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
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="BS DATA SCIENCE"
            subTitle="SUPERIOR UNIVERSITY"
            result="3.71/4"
            des="Doing bachelor's degree in data science is a great way to start your career in the field of data science. It provides you with the necessary skills and knowledge to work with data."
          />
          <ResumeCard
            title="A LEVEL "
            subTitle="LAHORE GRAMMAR SCHOOL "
            result="A GRADE"
            des="Done A level with 3 mager subjects, which are Mathematics, Physics and Computer Science. "
          />
          <ResumeCard
            title="O LEVEL"
            subTitle="GRAND CHARTER SCHOOL"
            result="A GRADE"
            des="Done O level with Science subjects, which are Physics, Chemistry and Computer Science."
          />
        </div>
      </div>
      {/* part Two */}
    </motion.div>
  );
};

export default Education;
