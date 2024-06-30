/* eslint-disable react/prop-types */
import { FaRegFileAlt } from "react-icons/fa";
// import { LuDownload } from "react-icons/lu";
import {} from "framer-motion";
import { MdOutlineDeleteOutline } from "react-icons/md";

function DocCard({ data }) {
  return (
    <div className=" relative w-60 h-72 rounded-[50px] bg-zinc-900/90 text-white py-8 px-6 overflow-hidden">
      <FaRegFileAlt />
      <p className="text-sm h-40 mt-5 font-medium leading-tight overflow-y-auto  custom-scrollbar">
        {data.note}
      </p>
      <div className="footer absolute bottom-0  w-full h-12 py-3 left-0 mb-3">
        <div className="flex items-center justify-between w-full px-8 ">
          <h5>{data.filesize}</h5>
          <span className="w-7 h-7 bg-[#ee3232] rounded-full flex  items-center justify-center cursor-pointer">
            {/* <LuDownload size=".8em" color="#fff" /> */}
            <MdOutlineDeleteOutline size="1em" color="#fff" />
          </span>
        </div>
      </div>
    </div>
  );
}

export default DocCard;
