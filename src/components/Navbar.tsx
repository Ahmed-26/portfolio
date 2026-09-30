import { useState } from "react";
import { Link } from "react-scroll";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { FaLinkedinIn, FaInstagram, FaGithub, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { logo } from "../assets";
import { navLinksdata } from "../constants";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="w-full h-20 sm:h-24 sticky top-0 z-50 backdrop-blur-2xl transition-colors bg-bodyColor/80 mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-800 px-4 sm:px-6">
      <Link to="home" spy={true} smooth={true} offset={-70} duration={500}>
        <img
          src={logo}
          alt="logo"
          className="w-24 sm:w-28 md:w-32 h-auto object-contain cursor-pointer"
        />
      </Link>

      <div>
        <ul className="hidden mdl:inline-flex items-center gap-6 lg:gap-10">
          {navLinksdata.map(({ _id, title, link }) => (
            <li
              className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
              key={_id}
            >
              <Link
                activeClass="active"
                to={link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger Button */}
        <span
          onClick={() => setShowMenu(!showMenu)}
          aria-label="Toggle navigation menu"
          className="text-xl mdl:hidden bg-[#0d1527] border border-gray-700 w-10 h-10 inline-flex items-center justify-center rounded-xl text-designColor cursor-pointer hover:bg-black duration-300 shadow-sm"
        >
          <FiMenu />
        </span>

        {/* Mobile Navigation Drawer */}
        {showMenu && (
          <>
            {/* Backdrop overlay */}
            <div
              className="fixed inset-0 bg-black/75 backdrop-blur-sm z-50 mdl:hidden"
              onClick={() => setShowMenu(false)}
            />

            <div className="fixed top-0 left-0 w-[85%] max-w-[340px] h-screen bg-[#0b1120] border-r border-gray-800/80 p-6 z-50 overflow-y-auto scrollbar-hide flex flex-col justify-between shadow-2xl">
              <div className="flex flex-col gap-6 relative">
                <div className="flex items-center justify-between pb-3 border-b border-gray-800">
                  <img className="w-24" src={logo} alt="logo" />
                  <span
                    onClick={() => setShowMenu(false)}
                    className="text-gray-400 hover:text-designColor duration-300 text-2xl cursor-pointer p-1"
                  >
                    <MdClose />
                  </span>
                </div>

                <p className="text-xs text-gray-400 leading-relaxed">
                  Python Developer, Data Analyst & CS Educator at Lahore Maktab School.
                </p>

                {/* Direct quick contact links in mobile drawer */}
                <div className="flex flex-col gap-2 pt-1">
                  <a
                    href="https://wa.me/923094101992"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 px-3 py-2 rounded-lg bg-slate-900 border border-gray-800 text-xs text-gray-300 hover:text-white hover:border-designColor transition-colors"
                  >
                    <FaWhatsapp className="text-green-400 text-base" />
                    <span>+92 309-4101992</span>
                  </a>
                  <a
                    href="mailto:ahmedrasheed6008@gmail.com"
                    className="inline-flex items-center gap-2.5 px-3 py-2 rounded-lg bg-slate-900 border border-gray-800 text-xs text-gray-300 hover:text-white hover:border-designColor transition-colors"
                  >
                    <FaEnvelope className="text-designColor text-sm" />
                    <span className="truncate">ahmedrasheed6008@gmail.com</span>
                  </a>
                </div>

                {/* Mobile Menu Links */}
                <ul className="flex flex-col gap-3 pt-2">
                  {navLinksdata.map((item) => (
                    <li
                      key={item._id}
                      className="text-base font-medium text-gray-300 tracking-wide cursor-pointer hover:text-designColor duration-300 py-1"
                    >
                      <Link
                        onClick={() => setShowMenu(false)}
                        activeClass="active"
                        to={item.link}
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Mobile Drawer Socials */}
              <div className="pt-6 border-t border-gray-800">
                <h2 className="text-xs uppercase font-titleFont mb-3 text-gray-400 tracking-wider">
                  Find me in
                </h2>
                <div className="flex gap-2.5">
                  <a
                    href="https://wa.me/923094101992"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="WhatsApp"
                  >
                    <span className="bannerIcon">
                      <FaWhatsapp />
                    </span>
                  </a>
                  <a
                    href="mailto:ahmedrasheed6008@gmail.com"
                    title="Email"
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
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
