import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";
import { fadeInUp, staggerContainer } from "../utils/motionAnimations";

const Achievement = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="initial"
      animate="animate"
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <motion.div variants={fadeInUp}>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold">CERTIFICATIONS</h2>
        </div>
      </motion.div>

      <motion.div
        variants={fadeInUp}
        className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10"
      >
        <ResumeCard
          title="Front-end Development"
          subTitle="Hong Kong University of Science & Technology"
          result="Success"
          des="Certified in front-end development, focusing on creating responsive and user-friendly web applications using HTML, CSS, and JavaScript frameworks."
        />
        <ResumeCard
          title="Data Science foundation"
          subTitle="Coursera, offered by IBM & University of London"
          result="Success"
          des="Certified in data science foundation, covering essential concepts and tools for data analysis, machine learning, and statistical modeling."
        />
        <ResumeCard
          title="Python for Data Analysis: Pandas & NumPy"
          subTitle="Coursera, offered by IBM & University of London"
          result="Success"
          des="Certified in Python for data analysis, focusing on using Pandas and NumPy libraries for data manipulation, analysis, and visualization."
        />
        <ResumeCard
          title="Android Development"
          subTitle="NAVTTC"
          result="Success"
          des="Certified in Android development, focusing on building mobile applications using Java and Kotlin programming languages, along with Android Studio tools."
        />
      </motion.div>
    </motion.div>
  );
};

export default Achievement;