import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";

function DocCard() {
  return (
    <div className=" relative w-60 h-72 rounded-[30px] bg-zinc-900/90 text-white py-8 px-5 overflow-hidden">
      <FaRegFileAlt />
      <p className="text-sm mt-5 font-medium leading-tight ">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio earum eum
        voluptatum possimus.
      </p>
      <div className="footer absolute bottom-0  w-full h-12 py-3 left-0 mb-3">
        <div className="flex items-center justify-between  px-8 ">
          <h5>.4mb</h5>
          <span className="w-7 h-7 bg-zinc-600 rounded-full flex  items-center justify-center cursor-pointer">
            <LuDownload size=".8em" color="#fff" />
          </span>
        </div>
      </div>
    </div>
  );
}

export default DocCard;
