import AboutInfo from "./AboutInfo";
import Caractér from "./Caractér";
import "../css/Aboute.css";
import Experience from "./EXPERIENCE";
import Education from "./Education";

const Aboute = ({ color }) => {
  return (
    <>
      <div className="container">
        <section className="about">
          <div className="aboute-title">
            <h1>
              a <span>p</span>ropos
            </h1>
          </div>
          <div className="propos-title">
            <AboutInfo />
            <Caractér />
          </div>
          <div className="aboute-title">
            <h1>
              e<span>x</span>perience
            </h1>
          </div>
          <Experience color={color} />
          <Education />
        </section>
      </div>
    </>
  );
};
export default Aboute;
