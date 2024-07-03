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
import { AnimatePresence } from "framer-motion";

function App() {
  const ref = useRef(null);
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [notes, setNotes] = useState([]);

  // Getting notes from firestore

  async function gettingNotes() {
    setIsLoading(true);
    try {
      const q = query(collection(db, "notes"), orderBy("createdAt"));
      const querySnapshot = await getDocs(q);

      const notesArray = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setNotes(notesArray);
      setIsLoading(false);
    } catch (e) {
      console.log("error while fetching data -" + e);
    }
  }

  const removeNote = (id) => {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  };

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
                {isLoading ? (
                  <span className="loading loading-spinner loading-lg absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]"></span>
                ) : (
                  notes.map((card) => (
                    <DocCard
                      key={card.id}
                      data={card}
                      reference={ref}
                      docId={card.id}
                      removeNote={removeNote}
                      gettingNotes={gettingNotes}
                    />
                  ))
                )}
              </div>
              <Footer>
                <div className="w-full z-50  fixed top-[90%] flex justify-center">
                  <button
                    onClick={() => setIsOpenModal((show) => !show)}
                    className="btn  text-[#19191C]  hover:bg-[#19191C] hover:text-[#A6ADBB]   bg-[#26ae64] "
                  >
                    Create a note
                  </button>
                  <AnimatePresence>
                    {isOpenModal && (
                      <Modal>
                        <AddNoteForm
                          gettingNotes={gettingNotes}
                          setIsOpenModal={setIsOpenModal}
                          currentUser={currentUser}
                        />
                      </Modal>
                    )}
                  </AnimatePresence>
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
