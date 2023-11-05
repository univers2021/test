import "../css/AboutInfo.css";
import { Infopers } from "./Data";

const AboutInfo = () => {
  return (
    <>
      <div className="ab-info">
        {Infopers.map((info) => {
          const { id, Rps, text } = info;
          return (
            <li key={id}>
              <h3>
                {" "}
                <span className="text">{text} :</span>
                <span className="Rps">{Rps}</span>
              </h3>
            </li>
          );
        })}
      </div>
    </>
  );
};
export default AboutInfo;
