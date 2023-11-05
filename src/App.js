import Aboute from "./component/Aboute";
import Contacte from "./component/Contacte";
import Home from "./component/Home";
import NavBar from "./component/NavBar";

import Themes from "./component/Themes";
import "./styles.css";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

let logalStor = () => {
  let color = "orange";
  if (localStorage.getItem("color")) {
    color = localStorage.getItem("color");
  }
  return color;
};

export default function App() {
  const [colors, setColors] = useState(logalStor());
  function handleColor(theme) {
    setColors(theme);
  }
  useEffect(() => {
    document.documentElement.style.setProperty("--main-color", colors);
    localStorage.setItem("color", colors);
  }, [colors]);

  return (
    <div className="App">
      <NavBar />
      <Themes handleColor={handleColor} />
      <Routes>
        <Route path="/" element={<Home color={colors} />} />
        <Route path="/apropos" element={<Aboute color={colors} />} />
        <Route path="/Contacte" element={<Contacte />} />
      </Routes>
    </div>
  );
}
