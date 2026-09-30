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
          <p className="text-sm text-designColor tracking-[4px]">
            2021 - Present
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
      </motion.div>

      <motion.div
        variants={fadeInUp}
        className="mt-6 lgl:mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10"
      >
        {[
          {
            title: "Python Developer",
            subTitle:
              "Artificial Automation Business Solutions - (Aug 2025 - Present)",
            result: "Lahore, Pakistan",
            des: [
              "Developed scalable applications using Python with clean, efficient, and maintainable code.",
              "Designed and implemented RESTful APIs using frameworks like Django / Flask / FastAPI.",
              "Built data processing pipelines for cleaning, transforming, and analyzing large datasets.",
              "Wrote reusable, testable, and optimized Python modules and scripts.",
            ],
          },
          {
            title: "O-Level / IGCSE Computer Science Teacher",
            subTitle: "Lahore Maktab School - (Aug 2025 - Present)",
            result: "Lahore, Pakistan",
            des: [
              "Delivered structured lessons covering Cambridge O-Level and IGCSE Computer Science curriculum.",
              "Instructed students in Python programming, algorithms, data structures, and computer theory.",
              "Mentored students for academic excellence and Cambridge board exam preparation with hands-on practice.",
            ],
          },
          {
            title: "Data Analyst",
            subTitle:
              "Artificial Automation Business Solutions - (Sep 2024 - Aug 2025)",
            result: "Lahore, Pakistan",
            des: [
              "Collected, cleaned, and analyzed large datasets to derive meaningful insights.",
              "Built predictive models to forecast business trends and optimize decision-making.",
              "Developed interactive dashboards in Power BI and Tableau for data visualization.",
              "Conducted statistical analysis using Python, SQL, and Excel.",
            ],
          },
          {
            title: "Social Media Handler",
            subTitle: "Lelow.pk - (Jun 2024 - Dec 2024)",
            result: "Lahore, Pakistan",
            des: [
              "Executed targeted marketing campaigns to increase engagement.",
              "Managed social media platforms and improved brand visibility.",
              "Analyzed campaign performance using data-driven strategies.",
            ],
          },
          {
            title: "Academic Teacher (O-Level & Other Classes)",
            subTitle: "Academic Tutoring & Mentorship - (Jun 2023 - Present)",
            result: "Lahore, Pakistan",
            des: [
              "Delivered structured lessons in Computer Science and related subjects.",
              "Mentored students for academic excellence and exam preparation.",
              "Simplified complex technical concepts for better understanding.",
            ],
          },
          {
            title: "Front-End Web Developer",
            subTitle: "Ebiz Ltd - (May 2022 - Nov 2023)",
            result: "Lahore, Pakistan",
            des: [
              "Developed responsive and user-friendly web interfaces.",
              "Improved website performance and UI/UX design.",
              "Built web components using HTML, CSS, Bootstrap, and Tailwind CSS.",
            ],
          },
          {
            title: "Social Media Handler",
            subTitle: "AA Engineering Pvt Ltd - (Jun 2021 - Apr 2022)",
            result: "Lahore, Pakistan",
            des: [
              "Managed digital campaigns to enhance online presence.",
              "Conducted market research and competitor analysis.",
              "Increased engagement through optimized content strategies.",
            ],
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
