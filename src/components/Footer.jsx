import { useState } from "react";
import Modal from "./Modal";
import AddNoteForm from "./AddNoteForm";

function Footer() {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <div className="w-full z-50  fixed top-[90%] flex justify-center">
      <button
        onClick={() => setIsOpenModal((show) => !show)}
        className="btn  text-[#19191C]  hover:bg-[#19191C] hover:text-[#A6ADBB]   bg-[#26ae64] "
      >
        Create a note
      </button>
      {isOpenModal && (
        <Modal>
          <AddNoteForm setIsOpenModal={setIsOpenModal} />
        </Modal>
      )}
    </div>
  );
}

export default Footer;
