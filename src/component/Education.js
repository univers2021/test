import "../css/Education.css";
import { Educ } from "./Data";

const Education = () => {
  return (
    <>
      <div className="container">
        <div className="title-exper">
          <h1>
            e<span>d</span>ucation
          </h1>
        </div>
        <div className="educat-con">
          {Educ.map((ed) => {
            const { id, institut, option, annee } = ed;
            return (
              <>
                <div className="educ" key={id}>
                  <h1>{option}</h1>
                  <h3>{institut}</h3>
                  <h4>{annee}</h4>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default Education;
