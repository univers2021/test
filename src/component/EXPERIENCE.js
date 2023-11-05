import "../css/Experience.css";
import { EXPERIENCE } from "./Data";
import { useState, useEffect } from "react";
import parse from "html-react-parser";

function handlelocale() {
  let local = localStorage.getItem("Type");
  if (local) {
    return JSON.parse(localStorage.getItem("Type"));
  } else {
    return "";
  }
}

const Experience = ({ color }) => {
  const [type, setType] = useState(handlelocale());
  useEffect(() => {
    localStorage.setItem("Type", JSON.stringify(type));
  }, [type]);

  function handleButton(e) {
    setType(e.target.value);
  }

  return (
    <>
      <div className="container">
        <div className="exper">
          <div className="exp-info">
            <input type="button" value="UniversAcier" onClick={handleButton} />
            <input
              type="button"
              value="AIRCELLE MAROC"
              onClick={handleButton}
            />
            <input type="button" value="SOMADIAZ" onClick={handleButton} />
          </div>
          <div className="exp-sec">
            {EXPERIENCE.map((experience) => {
              const { entreprise } = experience;
              if (entreprise === type) {
                return experience.ex.map((expers) => {
                  const { id, poste, exper, description } = expers;
                  return (
                    <>
                      <h2>{poste}</h2>
                      <h3>{entreprise}</h3>
                      <h4>{`experience :  ${exper}ans`}</h4>
                      <p>{parse(description)}</p>
                    </>
                  );
                });
              }
            })}
          </div>
        </div>
      </div>
    </>
  );
};
export default Experience;
