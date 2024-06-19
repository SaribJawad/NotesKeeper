import { useEffect, useRef, useState } from "react";
import { auth, db } from "./firebase/firebase";
import { Route, Routes } from "react-router-dom";
import BackgroundText from "./components/BackgroundText";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import DocCard from "./components/DocCard";
import Login from "./pages/Login";
import Footer from "./components/Footer";
import Modal from "./components/Modal";
import AddNoteForm from "./components/AddNoteForm";
import { collection, getDocs, orderBy, query } from "firebase/firestore";

function App() {
  const ref = useRef(null);
  const [currentUser, setCurrentUser] = useState(null);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [notes, setNotes] = useState([]);

  // Getting notes from firestore

  async function gettingNotes() {
    const q = query(collection(db, "notes"), orderBy("createdAt"));
    const querySnapshot = await getDocs(q);
    const notesArray = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
    }));

    setNotes(notesArray);
  }

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setCurrentUser(user);
        gettingNotes();
      } else {
        setCurrentUser(null);
      }
    });

    return;
  }, []);

  console.log(notes);

  const data = [
    {
      desc: "lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam excepturi iure in lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam excepturi iure inlorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam excepturi iure inlorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam excepturi iure inlorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam excepturi iure inipsam?",
      filesize: ".9mbs",
      tag: {
        isOpen: false,
        tagTitle: "Download Now",
        tagColor: "green",
      },
    },
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam excepturi iure in ipsam?",
      filesize: ".9mbs",
      tag: {
        isOpen: false,
        tagTitle: "Download Now",
        tagColor: "green",
      },
    },
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam excepturi iure in ipsam?",
      filesize: ".9mbs",
      tag: {
        isOpen: false,
        tagTitle: "Download Now",
        tagColor: "green",
      },
    },
  ];

  return (
    <div
      ref={ref}
      className="w-full h-screen max-h-[100%] bg-zinc-800 relative overflow-y-hidden .custom-scrollbar"
    >
      <Navbar currentUser={currentUser} setCurrentUser={setCurrentUser} />
      <Routes>
        <Route
          index
          element={
            <HomePage>
              <BackgroundText />
              <div className=" fixed top-0 left-0 w-full h-full z-[3] flex gap-5 justify-center flex-wrap p-24  overflow-y-auto overflow-x-hidden  .custom-scrollbar">
                {data.map((card, index) => (
                  <DocCard key={index} data={card} reference={ref} />
                ))}
                {/* <DocCard /> */}
              </div>
              <Footer>
                <div className="w-full z-50  fixed top-[90%] flex justify-center">
                  <button
                    onClick={() => setIsOpenModal((show) => !show)}
                    className="btn  text-[#19191C]  hover:bg-[#19191C] hover:text-[#A6ADBB]   bg-[#26ae64] "
                  >
                    Create a note
                  </button>
                  {isOpenModal && (
                    <Modal>
                      <AddNoteForm
                        setIsOpenModal={setIsOpenModal}
                        currentUser={currentUser}
                      />
                    </Modal>
                  )}
                </div>
              </Footer>
            </HomePage>
          }
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
