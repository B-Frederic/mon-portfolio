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
                        Je suis développeur web / web mobile depuis plus d'un an et me spécialise principalement dans le Frontend.<br />
                        J'ai toujours été passionné par l'informatique sans avoir l'occasion d'en faire mon métier. Puis, il y a quelques années, j'ai eu un accident de travail qui m'a conduit à une RQTH. C'étais donc l'occasion pour moi de me reconvertir dans le monde du numérique.<br/>
                        N'aimant pas rester à rien faire, convalescent ou non, et en sachant d'avance que je ne pourrais plus exercer mon ancien métier, j'ai donc commencé à toucher aux langages (Python, C, C++, PHP, JS) pour anticiper mon avenir professionnel.
                    </p>
                    <p>
                        Une fois officiellement partie de mon ancien travail, j'ai entrepris deux formations professionnelles: 
                        <ul>
                            <li>
                                Une de 6 mois axé principalement PHP (JS / PHP-Laravel / mySQL) avec une courte initiation au Javascript. Ayant eu un gros coup de coeur pour l'initiation de Javascript et du front en général, j'ai donc choisi en fin de formation la spécialisation React.
                            </li>
                            <li>
                                Une de 3 mois pour apprendre et monter en compétence qui était exclusivement axé au Javascript fullstack (JS / Node-Express / postgreSQL-sequelize).
                            </li>
                        </ul>
                        Pendant l'attente que j'ai eu entre les deux formations, j'ai pu faire des cours/projets Javascript ce qui m'a permis d'avoir un bon niveau théorique/pratique avant d'entrer en formation. Par la suite, j'ai converti certains projet JS vanilla en React. J'ai également pu découvrir de nouveaux langages/outils en parallèle à la formation comme Vuejs, Nextjs, Typescript, Tailwind, Firebase, Stripe etc...
                    </p>
                    <p>
                        Je suis un grand passionné, je ne compte pas mes heures, j'aime les défis et n'ai pas peur d'apprendre et de découvrir de nouvelles choses, de sortir de ma zone de confort, car s'est justement dans ce cas-là qu'on s'améliore le plus.
                    </p>
                    <p>
                        Je fais également du Blender et Three.js a titre de loisir en autodidacte, car j'aime beaucoup l'originalité et le côté admiratif que sa procure sur un site. Je pense par là même occasion, que la 3D deviendra de plus en plus présente sur les sites web dans les années avenir.
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