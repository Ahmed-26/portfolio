import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";
import { fadeInUp, staggerContainer } from "../utils/motionAnimations";

const Experience = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="initial"
      animate="animate"
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <motion.div variants={fadeInUp}>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2022 - 2025</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
      </motion.div>

      <motion.div
        variants={fadeInUp}
        className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10"
      >
        {[
          {
            title: "AI/ML Developer",
            subTitle: "XPO Code - (2025 - Present)",
            result: "Pakistan",
            des: "AI/Ml developer with a focus on creating intelligent systems and applications that leverage machine learning algorithms to solve real-world problems.",
          },
          {
            title: "Data Analyst",
            subTitle: "Self Employed - (2024 - Present)",
            result: "Pakistan",
            des: "Data analyst with a focus on extracting insights from data, creating visualizations, and providing actionable recommendations to drive business decisions.",
          },
          {
            title: "Social Media Manager",
            subTitle: "lelow.pk - (2023 - 2024)",
            result: "Pakistan",
            des: "Social media manager with a focus on creating engaging content, managing online communities, and driving brand awareness through social media platforms.",
          },
          {
            title: "Academic Tutor (O & Other classes)",
            subTitle: "Home Tutor (2023 - Present)",
            result: "Pakistan",
            des: "As an academic tutor, I provide personalized instruction and support to students in various subjects, helping them improve their understanding and performance in school.",
          },
          {
            title: "Front-end Developer",
            subTitle: "Ebiz Ltd - (2022 - 2023)",
            result: "Pakistan",
            des: "Front-end developer with a focus on creating responsive and user-friendly web applications using HTML, CSS, and JavaScript frameworks.",
          },
        ].map((job, index) => (
          <ResumeCard
            key={index}
            title={job.title}
            subTitle={job.subTitle}
            result={job.result}
            des={job.des}
          />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Experience;
