// React
import { Link } from "react-router-dom";
// Components
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import LeftBtn from "../components/utils/LeftBtn";
import RightBtn from "../components/utils/RightBtn";
// Data
import {
  dataBack,
  dataFront,
  dataHobbies,
  dataOther,
  dataSoftSkills,
} from "../data/data_skills";
// Picture
import { cv } from "../assets/img";
import { cvDesktop, cvImp } from "../assets/CV";

const Skills = () => {
  return (
    <div>
      <Header />
      <div className="container-skills">
        <div className="container-skills--box">
          <div className="container-skills--box-hard-skills">
            <h2>Hard Skills</h2>
            <div>
              <h3>Front : </h3>
              <ul>
                {dataFront.map((element, index) => (
                  <li key={index}>{element}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3>Back : </h3>
              <ul>
                {dataBack.map((element, index) => (
                  <li key={index}>{element}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3>Autres : </h3>
              <ul>
                {dataOther.map((element, index) => (
                  <li key={index}>{element}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3>Autodidacte (loisirs) : </h3>
              <ul>
                {dataHobbies.map((element, index) => (
                  <li key={index}>{element}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="container-skills--box-soft-skills">
            <h2>Soft Skills</h2>
            <ul>
              {dataSoftSkills.map((element, index) => (
                <li key={index}>{element}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="container-skills--box-cv">
          <h2>Curriculum Vitae</h2>
          <div>
            <img src={cv} alt="curriculum vitae" />
          </div>
          <div className="container-skills--box-cv-button">
            <div>
              <p>CV format ordi (couleur identique)</p>
              <Link to={cvDesktop} target="_blank"><button>Télécharger le CV</button></Link>
            </div>
            <div>
              <p>CV format imprimable (couleur modifié)</p>
              <Link to={cvImp} target="_blank"><button>Télécharger le CV</button></Link>
            </div>
          </div>
        </div>
        <div>
          <LeftBtn left={"/projets"} />
          <RightBtn right={"/contact"} />
        </div>
      </div>
        <Footer />
    </div>
  );
};

export default Skills;
