import { useRef } from "react";
import BackgroundText from "./components/BackgroundText";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import DocCard from "./components/DocCard";

function App() {
  const ref = useRef(null);

  const data = [
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam excepturi iure in ipsLorem ipsum dolor sit amet consectetur adipisicing elit. Veniam excepturi iure in ipsLorem ipsum dolor sit amet consectetur adipisicing elit. Veniam excepturi iure in ipsLorem ipsum dolor sit amet consectetur adipisicing elit. Veniam excepturi iure in ipsLorem ipsum dolor sit amet consectetur adipisicing elit. Veniam excepturi iure in ipsam?",
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
      className="w-full h-screen bg-zinc-800 relative overflow-y-scroll  "
    >
      <Navbar />
      <BackgroundText />
      <HomePage>
        <div className=" fixed top-0 left-0 w-full h-full z-[3] flex gap-5  flex-wrap p-5 ">
          {data.map((card, index) => (
            <DocCard key={index} data={card} reference={ref} />
          ))}
          {/* <DocCard /> */}
        </div>
      </HomePage>
    </div>
  );
}

export default App;
