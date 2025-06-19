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
          <p className="text-sm text-designColor tracking-[4px]">2022 - 2025</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="AI/ML Developer"
            subTitle="XPO Code - (2025 - Present)"
            result="Pakistan"
            des="AI/Ml developer with a focus on creating intelligent systems and applications that leverage machine learning algorithms to solve real-world problems."
          />
          <ResumeCard
            title="Data Analyst"
            subTitle="Self Employed - (2024 - Present)"
            result="Pakistan"
            des="Data analyst with a focus on extracting insights from data, creating visualizations, and providing actionable recommendations to drive business decisions."
          />
          <ResumeCard
            title="Social Media Manager"
            subTitle="lelow.pk - (2023 - 2024)"
            result="Pakistan"
            des="Social media manager with a focus on creating engaging content, managing online communities, and driving brand awareness through social media platforms."
          />
           <ResumeCard
            title="Academic Tutor (O & Other classes)"
            subTitle="Home Tutor (2023 - Present)"
            result="Pakistan"
            des="As an academic tutor, I provide personalized instruction and support to students in various subjects, helping them improve their understanding and performance in school."
          />
          <ResumeCard
            title="Front-end Developer"
            subTitle="Ebiz Ltd - (2022 - 2023)"
            result="Pakistan"
            des="Front-end developer with a focus on creating responsive and user-friendly web applications using HTML, CSS, and JavaScript frameworks."
          />
        </div>
        
      </div>
      
    </motion.div>
  );
};

export default Experience;
