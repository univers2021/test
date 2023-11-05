import "../css/NavBar.css";
import logo from "../inssest/logo.png";
import { liste } from "../component/Data.js";
import { NavLink, Link } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
// import { MdOpenInFull, MdOutlineNavigateNext } from "react-icons/md";
import { useState } from "react";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  function handleOpen() {
    setOpen(!open);
  }
  return (
    <>
      <nav>
        <div className="container">
          {/* =======starte liste screen========== */}
          <div className="img-logo">
            <Link to="/">
              <img src={logo} alt="logo" onClick={() => setOpen(!open)} />
            </Link>
            <div className="liste">
              {liste.map((list) => {
                const { id, text, url } = list;
                return (
                  <li key={id}>
                    <NavLink to={url}>{text}</NavLink>
                  </li>
                );
              })}
            </div>
          </div>
          {/* =======end liste screen========== */}
          {/* =======starte liste phone========== */}
          <div
            className={`${
              open ? "liste-phone liste-phone-open" : "liste-phone"
            }`}
          >
            {liste.map((list) => {
              const { id, text, url } = list;
              return (
                <li key={id} onClick={() => setOpen(!open)}>
                  <NavLink to={url}>{text}</NavLink>
                </li>
              );
            })}
          </div>
          <div onClick={handleOpen} className="menu">
            {!open ? (
              <AiOutlineMenu
                className="logo"
                style={{
                  fontSize: "30px",
                  position: "absolute",

                  zIndex: "1"
                }}
              />
            ) : (
              <AiOutlineClose
                className="logo"
                style={{
                  position: "absolute",

                  zIndex: 200
                }}
              />
            )}
          </div>
          {/* =======end liste phone========== */}
        </div>
      </nav>
    </>
  );
};
export default NavBar;
