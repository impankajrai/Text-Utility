import { useState } from "react";
import Getinput from "./Components/Getinput";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer"

export default function App() {
  const [mode, setMode] = useState({
    //   State default value
    type: "light",
    fontcolor: "black",
    bg: "white",
    navbg: "#6666FF"
  });

  function ToggleMode(e) {
    if (e.target.checked) {
      setMode({
        type: "dark",
        fontcolor: "white",
        bg: "black",
        navbg: "black"
      });
    } else {
      setMode({
        type: "light",
        fontcolor: "black",
        bg: "white",
        navbg: "#6666FF"
      });
    }
  }
  return (
    <>

    
      <NavBar title="Text Utils" GetToggle={ToggleMode} mode={mode} />

      <Getinput mode={mode} />{/*COMPONENT*/}

      <Footer title="Text Utils" GetToggle={ToggleMode} mode={mode} />
    </>

  );
}
