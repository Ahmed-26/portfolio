import { useState } from "react";
import Title from "./Title";
import Education from "./Education";
import Skills from "./Skills";
import Experience from "./Experience";
import Achievement from "./Achievement";
import { FadeIn } from "./FadeIn";

const Resume = () => {
  const [experienceData, setExperienceData] = useState<Boolean>(true);
  const [educationData, setEducationData] = useState<Boolean>(false);
  const [skillData, setSkillData] = useState<Boolean>(false);
  const [achievementData, setAchievementData] = useState<Boolean>(false);

  return (
    <section
      id="resume"
      className="w-full py-20 border-b-[1px] border-b-gray-700"
    >
      <FadeIn>
        <div className="flex justify-center items-center text-center">
          <Title title="5+ YEARS OF EXPERIENCE" des="My Resume" />
        </div>
        <div>
          <ul className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
            <li
              onClick={() => {
                setExperienceData(true);
                setEducationData(false);
                setSkillData(false);
                setAchievementData(false);
              }}
              className={`${
                experienceData
                  ? "border-designColor rounded-lg"
                  : "border-transparent"
              } resumeLi`}
            >
              Experience
            </li>
            <li
              onClick={() => {
                setExperienceData(false);
                setEducationData(true);
                setSkillData(false);
                setAchievementData(false);
              }}
              className={`${
                educationData
                  ? "border-designColor rounded-lg"
                  : "border-transparent"
              } resumeLi`}
            >
              Education
            </li>
            <li
              onClick={() => {
                setExperienceData(false);
                setEducationData(false);
                setSkillData(true);
                setAchievementData(false);
              }}
              className={`${
                skillData
                  ? "border-designColor rounded-lg"
                  : "border-transparent"
              } resumeLi`}
            >
              Professional Skills
            </li>
            <li
              onClick={() => {
                setExperienceData(false);
                setEducationData(false);
                setSkillData(false);
                setAchievementData(true);
              }}
              className={`${
                achievementData
                  ? "border-designColor rounded-lg"
                  : "border-transparent"
              } resumeLi`}
            >
              Achievements
            </li>
          </ul>
        </div>
        {experienceData && <Experience />}
        {educationData && <Education />}
        {skillData && <Skills />}
        {achievementData && <Achievement />}
      </FadeIn>
    </section>
  );
};

export default Resume;

