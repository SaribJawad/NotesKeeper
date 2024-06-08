import { useRef } from "react";
import BackgroundText from "./components/BackgroundText";
import DocCard from "./components/DocCard";
import Navbar from "./components/Navbar";

function App() {
  const ref = useRef(null);

  const data = [
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
    <div ref={ref} className="w-full h-screen bg-zinc-800 relative ">
      <Navbar />
      <BackgroundText />
      <div className=" fixed top-0 left-0 w-full h-full z-[3] flex gap-5 flex-wrap">
        {data.map((card, index) => (
          <DocCard key={index} data={card} reference={ref} />
        ))}
        {/* <DocCard /> */}
      </div>
    </div>
  );
}

export default App;
