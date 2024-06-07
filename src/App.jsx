import BackgroundText from "./components/BackgroundText";
import DocCard from "./components/DocCard";
import Navbar from "./components/Navbar";

function App() {
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
  ];

  return (
    <div className="w-full h-screen bg-zinc-800 relative ">
      <Navbar />
      <BackgroundText />
      <div className=" fixed top-0 left-0 w-full h-full z-[3]"></div>
    </div>
  );
}

export default App;
