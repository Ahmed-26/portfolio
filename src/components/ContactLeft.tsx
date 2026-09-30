import { FaLinkedinIn, FaInstagram, FaGithub, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { contactImg } from "../assets";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#0B1120] to-[#0B1120] p-4 sm:p-6 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-6 sm:gap-8 justify-center">
      <img
        className="w-full h-52 sm:h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-3 sm:gap-4">
        <h3 className="text-2xl sm:text-3xl font-bold text-white">Ahmed Rasheed</h3>
        <p className="text-base sm:text-lg font-normal text-gray-400">
          Data Analyst, Python Developer & Academic Teacher
        </p>
        <p className="text-sm sm:text-base text-gray-400 tracking-wide leading-relaxed">
          Data Analyst, Python Developer, and Academic Teacher with expertise in
          data science, web development, and digital marketing. Skilled in
          extracting insights from data, building predictive models, and
          developing responsive web applications. Passionate about
          problem-solving, automation, and mentoring students in O-Level / IGCSE
          Computer Science at Lahore Maktab School.
        </p>
        <p className="text-sm sm:text-base text-gray-400 flex flex-wrap items-center gap-2">
          Location: <span className="text-lightText font-medium">Lahore, Pakistan</span>
        </p>
        <p className="text-sm sm:text-base text-gray-400 flex flex-wrap items-center gap-2">
          Phone:{" "}
          <a
            href="https://wa.me/923094101992"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lightText hover:text-designColor transition-colors duration-300 underline cursor-pointer"
            title="Chat on WhatsApp"
          >
            +92 309-4101992
          </a>
        </p>
        <p className="text-sm sm:text-base text-gray-400 flex flex-wrap items-center gap-2">
          Email:{" "}
          <a
            href="mailto:ahmedrasheed6008@gmail.com"
            className="text-lightText hover:text-designColor transition-colors duration-300 underline cursor-pointer break-all"
            title="Send Email"
          >
            ahmedrasheed6008@gmail.com
          </a>
        </p>
      </div>
      <div className="flex flex-col gap-3 sm:gap-4">
        <h2 className="text-sm sm:text-base uppercase font-titleFont mb-2 sm:mb-4">Find me in</h2>
        <div className="flex flex-wrap gap-2 sm:gap-3">
          <a
            href="https://wa.me/923094101992"
            target="_blank"
            rel="noopener noreferrer"
            title="Chat on WhatsApp"
          >
            <span className="bannerIcon">
              <FaWhatsapp />
            </span>
          </a>
          <a
            href="mailto:ahmedrasheed6008@gmail.com"
            title="Send Email"
          >
            <span className="bannerIcon">
              <FaEnvelope />
            </span>
          </a>
          <a
            href="https://www.instagram.com/m.ahmed__19/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="bannerIcon">
              <FaInstagram />
            </span>
          </a>
          <a
            href="https://github.com/Ahmed-26"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="bannerIcon">
              <FaGithub />
            </span>
          </a>
          <a
            href="https://www.linkedin.com/in/ahmed-rasheed-7123701b6/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="bannerIcon">
              <FaLinkedinIn />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactLeft;
