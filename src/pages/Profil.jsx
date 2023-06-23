// Motion
import { motion } from "framer-motion";
// Components layout
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
// Components utils
import LeftBtn from "../components/utils/LeftBtn";
import RightBtn from "../components/utils/RightBtn";
// Picture
import { moi } from "../assets/img";
import { NavLink } from "react-router-dom";

const Profil = () => {
    return (
        <div>
            <Header />
            <div className="container-profil">
                <motion.div
                animate={{
                    scale: [1 , 1.1, 1]
                }}
                transition={{
                    duration: "2",
                    ease: "easeInOut",
                    repeatDelay: 6
                }}
                className="container-profil--picture">
                    <img src={moi} alt="photo du créateur du portfolio" />
                </motion.div>
                <div className="container-profil--text">
                  <p>Je m'appelle Frédéric Bétaouaf, j'ai 34ans et je vis dans le Sud Ouest de la France.  
                  Je suis sortie de l'école de formation O'clock où j'ai pu faire les deux modules d'apprentissage (PHP / JS).</p>
                  <p>Cela va faire bientôt 1.5 an que je travaille dans ce domaine en tant que Développeur Frontend. Je suis un très grand passionné et j'aime apprendre de nouvelles choses.</p>
                  <p>J'ai eu l'occasion d'apprendre et de m'adapter à de nouveaux langages pour des projets que j'ai pu faire. Je n'aurais donc aucun mal à m'adapter à de nouveaux langages pour remplir la mission qui me sera confié.</p>
                  <p>J'apprend également la 3D (Threejs / Blender) en parallèle, car j'aime beaucoup son originalité et son côté impressionnant. En effet, je pense que la 3D deviendra de plus en plus présente sur les sites web dans les années à venir.</p>

                  <div className="container-profil--text-stack">
                        <NavLink to="https://frederic-betaouaf-portfolio.netlify.app/projets">
                            <button>Voir mes projets</button>
                        </NavLink>
                        <NavLink to="https://frederic-betaouaf-portfolio.netlify.app/competences">
                            <button>Voir mes compétences</button>
                        </NavLink>
                  </div>
                </div>
            </div>
            <div>
                <LeftBtn left={"/"} />
                <RightBtn right={"/projets"}/>
            </div>
            <Footer />
        </div>
    );
};

export default Profil;