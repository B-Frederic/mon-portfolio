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
                    <p>
                        Je suis développeur web / web mobile depuis plus d'un an. J'ai toujours été passionné par l'informatique, et il y a quelques années, j'ai eu un accident de travail qui m'a conduit à une RQTH. C'étais donc l'occasion pour me reconvertir dans le monde du numérique.<br/>
                        J'ai débuté à l'aide de tuto, tel que Grafikart, sur une multitude de langages, mais ceux-ci ont retenu mon attention (HTML/CSS/PHP/mySQL/JS). J'ai donc entrepris de faire une formation une fois officiellement partie de mon entreprise, et j'ai rejoint les bancs de l'école O'Clock qui duré 6 mois. Pendant la formation j'ai eu un coup de coeur pour Javascript, et le front de manière général et j'ai donc choisi en spécialisation "React".<br/>
                        Je voulais améliorer mes connaissances en Javascript vanilla, pour encore mieux maîtriser React, j'ai donc fait une seconde formation, mais cette fois-ci de 3 mois axé full Javascript (JS/Node/Express) et j'ai continué en autodidacte le temps que la formation débute. Cela m'a permis d'avoir un bon niveau en Javascript, d'améliorer et d'augmenter mes compétences en React, et par là même occasion de toucher a beaucoup de framework/outils tel que (Firebase, Stripe, Tailwind, MongoDB) grâce a des projets personnel. J'ai pu également faire des cours en autodidacte sur Vue, Next et Typescript.<br/>
                        Je suis très motivé, déterminé et surtout passionné par ce métier, j'aime apprendre de nouvelles choses, viser des choses complexes pour les réaliser, car je suis curieux de savoir comment celà a été coder ou tous simplement créer moi-même une fonctionnalité qui n'existe pas pour atteindre l'objectif visé.<br/>

                    </p>
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