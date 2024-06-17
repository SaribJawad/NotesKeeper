import { useEffect, useRef, useState } from "react";
import BackgroundText from "./components/BackgroundText";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import DocCard from "./components/DocCard";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import { auth } from "./firebase/firebase";
import Footer from "./components/Footer";

function App() {
  const ref = useRef(null);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setCurrentUser(user);
      } else {
        setCurrentUser(null);
      }
    });

    return;
  }, []);

  console.log(currentUser);

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
              <div
                className=" fixed top-0 left-0 w-full h-full z-[3] flex gap-5 justify-center flex-wrap p-24  overflow-y-auto overflow-x-hidden  .custom-scrollbar
          "
              >
                {data.map((card, index) => (
                  <DocCard key={index} data={card} reference={ref} />
                ))}
                {/* <DocCard /> */}
              </div>
              <Footer />
            </HomePage>
          }
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
