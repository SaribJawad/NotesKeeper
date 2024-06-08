/* eslint-disable react/prop-types */
import { FaRegFileAlt } from "react-icons/fa";
// import { LuDownload } from "react-icons/lu";
import { motion } from "framer-motion";
import { MdOutlineDeleteOutline } from "react-icons/md";

function DocCard({ data, reference }) {
  return (
    <motion.div
      drag
      dragConstraints={reference}
      whileDrag={{ scale: 1.1 }}
      className=" relative w-60 h-72 rounded-[50px] bg-zinc-900/90 text-white py-8 px-6 overflow-hidden"
    >
      <FaRegFileAlt />
      <p className="text-sm mt-5 font-medium leading-tight ">{data.desc}</p>
      <div className="footer absolute bottom-0  w-full h-12 py-3 left-0 mb-3">
        <div className="flex items-center justify-between  px-8 ">
          <h5>{data.filesize}</h5>
          <span className="w-7 h-7 bg-[#ee3232] rounded-full flex  items-center justify-center cursor-pointer">
            {/* <LuDownload size=".8em" color="#fff" /> */}
            <MdOutlineDeleteOutline size="1em" color="#fff" />
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default DocCard;
