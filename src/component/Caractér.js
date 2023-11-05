import "../css/caractér.css";
import { COMPETENCES } from "./Data";
import { FiDownload } from "react-icons/fi";
import cv from "../inssest/Messoudi.pdf";

const Caractér = () => {
  return (
    <>
      <div className="carac-abou">
        <h1
          style={{
            textTransform: "capitalize",
            marginBottom: 20,
            color: "rgb(53,53,53)",
            marginTop: "20px"
          }}
        >
          competence
        </h1>
        {COMPETENCES.map((car) => {
          const { id, competence, pourcentage } = car;
          return (
            <>
              <h3> {competence}</h3>
              <div className="carac" key={id}>
                <span style={{ width: `${pourcentage}%` }}></span>
              </div>
            </>
          );
        })}
        <div className="btn-car">
          <a href={cv} download="" title="Curriculum vitae">
            <div className="aboute-car">
              <h3>cv</h3>
            </div>
            <div className="icons-car">
              <FiDownload
                style={{
                  fontSize: "35px",
                  lineHeight: "60px",
                  paddingTop: "10px",
                  paddingLeft: "15px"
                }}
              />
            </div>
          </a>
        </div>
      </div>
    </>
  );
};
export default Caractér;
