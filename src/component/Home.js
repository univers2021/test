import "../css/Home.css";
import { SiAboutdotme } from "react-icons/si";
import photo from "../inssest/rachid.png";
import Animation from "./animation";
import { Link } from "react-router-dom";
const Home = ({ color }) => {
  const styles = {
    boxShadow: `-6px 14px 2px 2px ${
      color === "green"
        ? "rgb(126, 252, 126)"
        : color === "red"
        ? "rgb(240, 98, 98)"
        : color === "blue"
        ? "rgb(131, 131, 243)"
        : color === "gray"
        ? "rgb(170, 153, 153)"
        : color === "white"
        ? "rgb(168, 165, 165)"
        : color === "pink"
        ? "rgb(253, 111, 135)"
        : color === "cyan"
        ? "skyblue"
        : "orange"
    }`
  };

  return (
    <div className="container">
      <div className="classeur">
        <div className="img">
          <img src={photo} alt="messoudi" title="messoudi rachid" />
        </div>
        <div className="info">
          <h1 className="title">messoud rachid </h1>
          <Animation />
          <p className="paragraphe">
            <span>S</span>érieux, dynamique, ayant le gout du chalenge, esprit
            d'équipe. Diplôme en méthode de fabrication mécanique. A la
            recherche d'un nouveau défi après 10 ans d'expérience au sein de
            l'entreprise Univers Acier entant que Technicien EAF (electric arc
            furnace)
          </p>
          <Link to="/apropos">
            <div className="btn">
              <div className="aboute">
                <h3>aboute</h3>
              </div>
              <div className="icons">
                <SiAboutdotme
                  className="icon"
                  style={{
                    textAlign: "center",
                    paddingTop: "12px",
                    paddingLeft: "12px",
                    fontSize: "40px"
                  }}
                />
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div className="background" style={styles}></div>
    </div>
  );
};
export default Home;
