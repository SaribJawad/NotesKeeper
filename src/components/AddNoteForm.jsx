import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase/firebase";
import { useState } from "react";

function AddNoteForm({ setIsOpenModal, currentUser }) {
  const [noteInput, setNoteInput] = useState("");

  console.log(noteInput);
  // Adding notes to firestore
  async function addingNotes() {
    try {
      await addDoc(collection(db, "notes"), {
        userId: currentUser?.uid,
        note: noteInput,
        createdAt: serverTimestamp(),
      });
      setIsOpenModal(false);
      setNoteInput("");
    } catch (e) {
      console.log("Error adding document:", e);
    }
  }

  return (
    <div className="px-10 py-8">
      <button
        onClick={() => setIsOpenModal((show) => !show)}
        className="btn btn-circle btn-sm absolute left-[90%] bg-transparent border-none "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      <div className="h-[400px] w-[500px] flex items-center justify-center flex-col gap-8 rounded-lg">
        <textarea
          value={noteInput}
          className="textarea textarea-bordered text-[#FFFFFF] bg-[#19191C] outline-none h-52 w-[80%] border-none placeholder:text-[#a3a3a3]
          "
          placeholder="Write your notes here."
          onChange={(e) => setNoteInput(e.target.value)}
        ></textarea>
        <button
          onClick={addingNotes}
          className="btn  bg-[#26AE64] text-[#19191C] hover:bg-[#26AE64] hover:text-[#19191C] "
        >
          Add Note
        </button>
      </div>
    </div>
  );
}

export default AddNoteForm;
