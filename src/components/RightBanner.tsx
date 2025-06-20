import { bannerImg } from "../assets";
import { motion } from "framer-motion";
import { FadeIn } from "./FadeIn";

const RightBanner = () => {
  return (
    <FadeIn className="w-full lgl:w-1/2 flex justify-center items-center relative overflow-hidden">
      <motion.div className="hidden lgl:flex justify-center items-center relative w-full">
  <motion.img
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, ease: "easeOut" }}
    src={bannerImg}
    alt="bannerImg"
    className="w-[300px] h-[400px] lgl:w-[500px] lgl:h-[680px] z-10 object-cover scale-105 transition-transform duration-700"
  />
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
    className="absolute bottom-0 w-[350px] h-[300px] lgl:w-[500px] lgl:h-[500px] bg-gradient-to-r from-[#1e2024] to-[#0B1120] shadow-shadowOne flex justify-center items-center z-0"
  />
</motion.div>
    </FadeIn>
  );
};

export default RightBanner;