/* eslint-disable react/prop-types */
import { FaRegFileAlt } from "react-icons/fa";
// import { LuDownload } from "react-icons/lu";
import { AnimatePresence, motion } from "framer-motion";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase/firebase";
import { useState } from "react";
import { formatDistanceToNow } from "date-fns";

function DocCard({ data, docId, gettingNotes, removeNote }) {
  const [isVisible, setIsVisible] = useState(true);

  // deleting notes
  async function deleteNotes() {
    try {
      setIsVisible(false);
      setTimeout(async () => {
        await deleteDoc(doc(db, "notes", docId));
        removeNote(docId); // to refresh the app.js state
        gettingNotes();
      }, 400);
    } catch (e) {
      console.log("Error deleting document:", e);
    }
  }

  const createdAt = data.createdAt.seconds * 1000;
  const timeAgo = formatDistanceToNow(new Date(createdAt), { addSuffix: true });

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.4,
            delay: 0.2,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          exit={{ opacity: 0, scale: 0 }}
          className=" relative w-60 h-72 rounded-[50px] bg-zinc-900/90 text-white py-8 px-6 overflow-hidden"
        >
          <FaRegFileAlt />
          <p className="text-sm h-40 mt-5 font-medium leading-tight overflow-y-auto  custom-scrollbar capitalize">
            {data.note}
          </p>
          <div className="footer absolute bottom-0  w-full h-12 py-3 left-0 mb-3">
            <div className="flex items-center justify-between w-full px-8 ">
              <h5 className="text-xs text-gray-400 capitalize">{timeAgo}</h5>

              <span
                onClick={deleteNotes}
                className="w-7 h-7 bg-[#ee3232] rounded-full flex  items-center justify-center cursor-pointer"
              >
                {/* <LuDownload size=".8em" color="#fff" /> */}
                <MdOutlineDeleteOutline size="1em" color="#fff" />
              </span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default DocCard;
