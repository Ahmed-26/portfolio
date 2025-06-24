import { useTypewriter, Cursor } from "react-simple-typewriter";
import {
  FaFacebookF,
  FaYoutube,
  FaLinkedinIn,
  FaReact,
  FaInstagram,
  FaGithub,
  FaPython,
  FaFileDownload,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiFigma,
  SiNextdotjs,
  SiPowerbi,
  SiCanva,
  SiSqlite,
  SiMysql,
  SiStreamlit,
} from "react-icons/si";
import { FadeIn } from "./FadeIn";
import { bannerImg } from "../assets";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Professional Coder.", "AI/ML Developer.", "Data Analyst."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });

  return (
    <FadeIn className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>

        <h1 className="text-6xl font-bold text-white">
          Hi, I'm{" "}
          <span className="text-designColor capitalize">Ahmed Rasheed</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor cursorStyle="|" cursorColor="" />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wider">
          A Python & AI/ML Developer with a Data Science mindset. I design
          intelligent systems, build data powered applications, and solve
          real-world problems through code. Passionate about continuous learning
          and applying modern tech in creative ways.
        </p>
        <a
          href="/public/Ahmed_Resume.pdf"
          download
          className="flex items-center gap-2"
        >
          <FaFileDownload className="text-white" />
          <span className="text-base text-white">Download My Resume</span>
        </a>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          {/* Mobile-only Image Preview */}
          <div className="block lgl:hidden w-full flex justify-center items-center">
            <img
              src={bannerImg}
              alt="Ahmed Rasheed"
              className="w-[300px] h-[400px] object-cover mb-6"
            />
          </div>

          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
            <a href="https://www.instagram.com/m.ahmed__19/" target="_blank">
              <span className="bannerIcon">
                <FaInstagram />
              </span>
            </a>
            <a href="https://github.com/Ahmed-26" target="_blank">
              <span className="bannerIcon">
                <FaGithub />
              </span>
            </a>
            <a
              href="https://www.linkedin.com/in/ahmed-rasheed-7123701b6/"
              target="_blank"
            >
              <span className="bannerIcon">
                <FaLinkedinIn />
              </span>
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaPython />
            </span>
            <span className="bannerIcon">
              <SiPowerbi />
            </span>
            <span className="bannerIcon">
              <SiStreamlit />
            </span>
            <span className="bannerIcon">
              <SiMysql />
            </span>
          </div>
        </div>
      </div>
    </FadeIn>
  );
};

export default LeftBanner;
