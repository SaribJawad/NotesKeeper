function AddNoteForm({ setIsOpenModal }) {
  return (
    <div className="p-4">
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
      <div className="h-[400px] w-[500px] flex items-center justify-center flex-col gap-10 rounded-lg">
        <textarea
          className="textarea textarea-bordered text-[#FFFFFF] bg-[#19191C] outline-none h-56 w-[80%] border-none placeholder:text-[#a3a3a3]
          "
          placeholder="Write your notes here."
        ></textarea>
        <button className="btn btn-sm bg-[#26AE64] text-[#19191C] hover:bg-[#26AE64] hover:text-[#19191C] ">
          Add
        </button>
      </div>
    </div>
  );
}

export default AddNoteForm;
