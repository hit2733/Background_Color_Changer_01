import { useState } from "react";
import "./App.css";
import Navbar from "./Navbar/Navbar";

function App() {
  const [color, setcolor] = useState("white");

  return (
    <>
      <div className="h-screen w-full" style={{ backgroundColor: color }}>
        <div className="text-center text-4xl fixed flex flex-wrap justify-center inset-x-0 top-72 font-sans ">
          CLICK ON THE BUTTONS TO CHANGE THE BACKGROUND COLOR
        </div>
        <Navbar setcolor={setcolor} />
      </div>
    </>
  );
}

export default App;
