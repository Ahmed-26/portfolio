import { useState } from "react";
import { BsGithub } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";

interface Props {
  title: string;
  des: string;
  src: string; // Can be image or video URL
  type?: "image" | "video";
}

const ProjectsCard = ({ title, des, src, type = "image" }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {/* Card */}
      <div className="w-full p-4 xl:px-12 h-auto xl:py-10 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000">
        <div className="w-full h-[80%] overflow-hidden rounded-lg">
          {type === "video" ? (
            <video
              controls
              className="w-full h-60 object-cover rounded-lg group-hover:scale-110 duration-300 cursor-pointer"
              src={src}
            />
          ) : (
            <img
              className="w-full h-60 object-cover group-hover:scale-110 duration-300 cursor-pointer"
              src={src}
              alt="project"
            />
          )}
        </div>
        <div className="w-full mt-5 flex flex-col gap-6">
          <div>
            <div className="flex items-center justify-between">
              <h3 className="text-base uppercase text-designColor font-normal">
                {title}
              </h3>
              <div className="flex gap-2">
                <a href="https://github.com/Ahmed-26" target="_blank">
                  <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
                    <BsGithub />
                  </span>
                </a>
                <span
                  onClick={() => setIsModalOpen(true)}
                  className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer"
                >
                  <FaYoutube />
                </span>
              </div>
            </div>
            <p className="text-sm tracking-wide mt-3 hover:text-gray-100 duration-300">
              {des}
            </p>
          </div>
        </div>
      </div>

      {/* Modal (Image or Video Fullscreen) */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex justify-center items-center"
          onClick={() => setIsModalOpen(false)}
        >
          {type === "video" ? (
            <video
              src={src}
              controls
              autoPlay
              className="w-[90%] h-auto max-w-4xl rounded-xl"
            />
          ) : (
            <img
              src={src}
              alt="fullscreen"
              className="max-w-4xl w-full h-auto rounded-lg"
            />
          )}
        </div>
      )}
    </>
  );
};

export default ProjectsCard;
