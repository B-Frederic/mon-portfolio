// Components
import Header from "../components/layout/Header";
import LeftBtn from "../components/utils/LeftBtn";
import RightBtn from "../components/utils/RightBtn";

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
                                <li>Html</li>
                                <li>Css</li>
                                <li>Javascript</li>
                                <li>React</li>
                                <li>Sass/Scss</li>
                                <li>Tailwind</li>
                                <li>Bootstrap</li>
                                <li>Bulma</li>
                                <li>Material-ui / Semantic-ui</li>
                            </ul>
                        </div>
                        <div>
                            <h3>Back : </h3>
                            <ul>
                                <li>PHP</li>
                                <li>Laravel</li>
                                <li>Sequelize</li>
                                <li>Node / Express</li>
                                <li>mySQL / postgreSQL</li>
                                <li>MongoDB</li>
                            </ul>
                        </div>
                        <div>
                            <h3>Autres : </h3>
                            <ul>
                                <li>Github</li>
                                <li>VScode</li>
                                <li>Firebase</li>
                                <li>Stripe</li>
                                <li>Linux</li>
                                <li>CLI</li>
                                <li>Compass</li>
                                <li>Postman</li>
                                <li>Insomnia</li>
                            </ul>
                        </div>
                        <div>
                            <h3>Autodidacte (loisir) : </h3>
                            <ul>
                                <li>Blender</li>
                                <li>ThreeJS</li>
                            </ul>
                        </div>
                    </div>
                    <div className="container-skills--box-soft-skills">
                        <h2>Soft Skills</h2>
                        <ul>
                            <li>Force de proposition</li>
                            <li>Esprit d'équipe</li>
                            <li>Sérieux</li>
                            <li>Motivé</li>
                            <li>Rigoureux</li>
                            <li>Autonome</li>
                            <li>Entreprenant</li>
                            <li>Perfectionniste</li>
                            <li></li>
                        </ul>
                    </div>
                </div>
                <div className="container-skills--box-cv">
                        <h2>Curriculum Vitae</h2>
                    <div>
                        <img src="../../src/assets/img/CV.png" alt="curriculum vitae" />
                    </div>
                    <div className="container-skills--box-cv-button">
                        <div>
                            <p>CV version actuel (format couleur identique)</p>
                            <button>Télécharger le CV</button>
                        </div>
                        <div>
                            <p>CV version imprimable (format économies d'ancre)</p>
                            <button>Télécharger le CV</button>
                        </div>
                    </div>
                </div>
                <div>
                    <LeftBtn left={"/projets"} />
                    <RightBtn right={"/contact"}/>
                </div>
            </div>
        </div>
    );
};

export default Skills;