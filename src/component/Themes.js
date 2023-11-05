import "../css/Themes.css";
import { ColorsThemes } from "./Data";
import { BsFillGearFill } from "react-icons/bs";
import { useState } from "react";

const Themes = ({ handleColor }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className={open ? "themes themes-open" : "themes"}>
        {ColorsThemes.map((Cth) => {
          const { id, theme, text } = Cth;
          return (
            <div
              key={id}
              style={{ backgroundColor: `${theme}` }}
              className="btn-theme"
              onClick={() => {
                handleColor(theme);
              }}
            ></div>
          );
        })}
      </div>
      <div
        className="icon-theme"
        onClick={() => {
          setOpen(!open);
        }}
      >
        {open ? <BsFillGearFill /> : <BsFillGearFill />}
      </div>
    </>
  );
};
export default Themes;
