import { FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { logo } from "../assets";
import { Link } from "react-scroll";
import { FadeIn } from "./FadeIn";

const Footer = () => {
  return (
    <FadeIn className="w-full py-10 h-auto border-b border-b-black flex flex-col gap-6">
      {/* Top: Main Footer Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-2 gap-6 w-full">
        {/* Left: Quick Links & Icons */}
        <div className="w-full h-full flex flex-col gap-4">
          <h3 className="text-lg uppercase text-designColor tracking-wider">Quick Links</h3>
          <ul className="flex gap-4 flex-wrap font-titleFont font-medium overflow-hidden">
            <li>
              <Link to="home" spy={true} smooth={true} offset={-70} duration={500} className="text-sm hover:text-designColor cursor-pointer">
                Home
              </Link>
            </li>
            <li>
              <Link to="project" spy={true} smooth={true} offset={-70} duration={500} className="text-sm hover:text-designColor cursor-pointer">
                Projects
              </Link>
            </li>
            <li>
              <Link to="resume" spy={true} smooth={true} offset={-70} duration={500} className="text-sm hover:text-designColor cursor-pointer">
                Resume
              </Link>
            </li>
            <li>
              <Link to="contact" spy={true} smooth={true} offset={-70} duration={500} className="text-sm hover:text-designColor cursor-pointer">
                Contact
              </Link>
            </li>
          </ul>

          {/* Social Icons */}
          <div className="flex gap-3 pt-2">
            <a href="https://www.instagram.com/m.ahmed__19/" target="_blank" rel="noopener noreferrer">
              <span className="bannerIcon"><FaInstagram /></span>
            </a>
            <a href="https://github.com/Ahmed-26" target="_blank" rel="noopener noreferrer">
              <span className="bannerIcon"><FaGithub /></span>
            </a>
            <a href="https://www.linkedin.com/in/ahmed-rasheed-7123701b6/" target="_blank" rel="noopener noreferrer">
              <span className="bannerIcon"><FaLinkedinIn /></span>
            </a>
          </div>
        </div>

        {/* Right: About Text */}
        <div className="w-full h-full flex flex-col justify-center gap-2 text-gray-400 text-sm font-titleFont">
          <p>
            I'm a Data Science enthusiast who turns raw data into smart solutions. Whether it's dashboards, ML apps, or automation tools—I love solving real-world problems.
          </p>
          <p>
            Let's collaborate to bring your idea to life with clean code, intuitive design, and impactful results.
          </p>
        </div>
      </div>

      {/* Bottom: Copyright */}
      <div className="text-center text-gray-500 text-xs pt-4 border-t border-t-gray-800">
        © {new Date().getFullYear()} Ahmed Rasheed. All rights reserved.
      </div>
    </FadeIn>
  );
};

export default Footer;