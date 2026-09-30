import { Ahmed_rasheed } from "../assets";
import { motion } from "framer-motion";
import { FadeIn } from "./FadeIn";
import { FaPython, FaGraduationCap } from "react-icons/fa";

const RightBanner = () => {
  return (
    <FadeIn className="w-full lgl:w-1/2 flex flex-col justify-center items-center relative my-6 lgl:my-0">
      <div className="relative w-full max-w-[480px] flex justify-center items-center">
        {/* Ambient Glows behind the card */}
        <div className="absolute -top-6 -right-6 w-60 sm:w-80 h-60 sm:h-80 bg-designColor/15 rounded-full blur-[80px] sm:blur-[100px] pointer-events-none z-0" />
        <div className="absolute -bottom-6 -left-6 w-60 sm:w-80 h-60 sm:h-80 bg-blue-600/15 rounded-full blur-[80px] sm:blur-[100px] pointer-events-none z-0" />

        {/* Background Card Frame / Pedestal */}
        <div className="absolute bottom-0 w-[260px] h-[340px] xs:w-[290px] xs:h-[370px] sm:w-[360px] sm:h-[450px] lgl:w-[420px] lgl:h-[510px] bg-gradient-to-t from-[#050914] via-[#0d1629] to-[#15233e] rounded-3xl border border-gray-700/60 shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden z-0">
          {/* Subtle Top Accent Glow Line */}
          <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-designColor/70 to-transparent" />
          {/* Inner spotlight behind shoulders to pop suit out */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-52 sm:w-64 h-52 sm:h-64 bg-designColor/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-40 sm:w-48 h-40 sm:h-48 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />
        </div>

        {/* Floating Badge 1 - Top Right (Python & AI) with gentle loop float (Tablet & Desktop) */}
        <motion.div
          animate={{ y: [0, -7, 0] }}
          transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
          className="hidden sml:flex items-center gap-3 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-2xl bg-[#090e1a]/95 backdrop-blur-md border border-gray-700/80 shadow-[0_12px_30px_rgba(0,0,0,0.6)] absolute top-8 -right-2 lgl:-right-6 z-20 hover:scale-105 transition-transform duration-300 cursor-default"
        >
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-designColor/15 flex items-center justify-center text-designColor text-lg sm:text-xl">
            <FaPython />
          </div>
          <div>
            <p className="text-[9px] sm:text-[10px] text-gray-400 font-medium uppercase tracking-wider">Specialization</p>
            <p className="text-xs sm:text-sm font-bold text-white">Python & AI/ML</p>
          </div>
        </motion.div>

        {/* Floating Badge 2 - Bottom Left (Lahore Maktab CS Educator) with gentle loop float (Tablet & Desktop) */}
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 0.8 }}
          className="hidden sml:flex items-center gap-3 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-2xl bg-[#090e1a]/95 backdrop-blur-md border border-gray-700/80 shadow-[0_12px_30px_rgba(0,0,0,0.6)] absolute bottom-8 -left-2 lgl:-left-6 z-20 hover:scale-105 transition-transform duration-300 cursor-default"
        >
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-cyan-400/15 flex items-center justify-center text-cyan-400 text-lg sm:text-xl">
            <FaGraduationCap />
          </div>
          <div>
            <p className="text-[9px] sm:text-[10px] text-gray-400 font-medium uppercase tracking-wider">CS Educator</p>
            <p className="text-xs sm:text-sm font-bold text-white">Lahore Maktab</p>
          </div>
        </motion.div>

        {/* Portrait Image with natural proportions & 3D card pop-out */}
        <motion.img
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          src={Ahmed_rasheed}
          alt="Ahmed Rasheed"
          className="w-[260px] xs:w-[280px] sm:w-[350px] lgl:w-[430px] h-auto max-h-[460px] sm:max-h-[540px] lgl:max-h-[580px] object-contain z-10 drop-shadow-[0_25px_35px_rgba(0,0,0,0.85)] hover:scale-[1.02] transition-transform duration-500"
        />

        {/* Seamless bottom fade blending waist smoothly into dark background */}
        <div className="absolute bottom-0 inset-x-0 h-12 bg-gradient-to-t from-bodyColor via-bodyColor/60 to-transparent pointer-events-none z-10 rounded-b-3xl" />
      </div>

      {/* Mobile-Only Feature Pills Bar (neatly displays below portrait on phones) */}
      <div className="flex sml:hidden flex-wrap justify-center gap-2.5 mt-5 w-full px-2 z-20">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#090e1a]/95 border border-gray-700/80 shadow-md">
          <FaPython className="text-designColor text-sm" />
          <span className="text-xs font-semibold text-white">Python & AI/ML</span>
        </div>
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#090e1a]/95 border border-gray-700/80 shadow-md">
          <FaGraduationCap className="text-cyan-400 text-sm" />
          <span className="text-xs font-semibold text-white">Lahore Maktab CS</span>
        </div>
      </div>
    </FadeIn>
  );
};

export default RightBanner;