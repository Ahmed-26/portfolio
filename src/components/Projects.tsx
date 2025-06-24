import Title from "./Title";
import ProjectsCard from "./ProjectsCard";
import { project2,project3,project4,projectzero,EDA} from "../assets";
import { FadeIn } from "./FadeIn";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-gray-700"
    >
      <FadeIn>
        <div className="flex justify-center items-center text-center">
          <Title
            title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
            des="My Projects"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
          <ProjectsCard
            title="Point of Sale System"
            des="A responsive POS system built with Python and Streamlit."
            src={project2}
            type="video"
          />
          <ProjectsCard
            title="Road Accident Analysis"
            des="Road accident dashboard on powerbi with interactive visualizations."
            src={project3}
            type="image"
          />
          <ProjectsCard
            title="Sales Dashboard"
            des="Sales dashboard built with Power BI, showcasing data insights."
            src={project4}
            type="video"
          />
          
          <ProjectsCard
            title="Gold price prediction "
            des="Gold price prediction model using machine learning."
            src={projectzero}
            type="video"
          />
          <ProjectsCard
            title="Titanic Survival EDA analysis"
            des="Exploratory Data Analysis (EDA) on Titanic dataset using Python."
            src={EDA} // Replace with your video URL
            type="image"
          />
        </div>
      </FadeIn>
    </section>
  );
};

export default Projects;
