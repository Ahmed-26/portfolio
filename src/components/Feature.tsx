import { AiFillAppstore } from "react-icons/ai";
import { FaMobile, FaGlobe } from "react-icons/fa";
import { SiProgress, SiAntdesign, SiPytest, SiPython, SiPandas, SiScikitlearn, SiStreamlit, SiGithub, SiPowerbi } from "react-icons/si";
import Card from "./Card";
import Title from "./Title";
import { FadeIn } from "./FadeIn";

const Feature = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-gray-700"
    >
      <FadeIn>
        <Title title="Features" des="What I Do" />
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
          <Card
            title="Data Analysis & Visualization"
            des="I analyze and visualize data using Pandas, Matplotlib, and Seaborn to uncover meaningful patterns and insights."
            icon={<SiPandas />}
          />
          <Card
            title="Machine Learning & AI Solutions"
            des="I build ML models for prediction, classification, and recommendation using Scikit-learn, TensorFlow, and Keras."
            icon={<SiScikitlearn/>}
          />
          <Card
            title=" Python Automation & Tool Development"
            des="I create Python-based tools and scripts to automate tasks and develop custom solutions like POS systems and chatbots."
            icon={<SiPython />}
          />
          <Card
            title=" Streamlit & API Integration"
            des="I build interactive web apps with Streamlit and integrate APIs for real-time data access and model deployment."
            icon={<SiStreamlit />}
          />
          <Card
            title=" Real-world Project Experience"
            des="I apply my skills in freelance and academic projects, solving real problems through code, data, and machine learning."
            icon={<SiGithub />}
          />
          <Card
            title=" Data-Driven Decision Making"
            des="I transform raw data into actionable insights that help individuals and businesses make smarter, evidence-based decisions."
            icon={<SiPowerbi />}
          />
        </div>
      </FadeIn>
    </section>
  );
};

export default Feature;
