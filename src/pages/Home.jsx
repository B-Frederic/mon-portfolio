// Components
import Header from "../components/layout/Header";
import LeftBtn from "../components/utils/LeftBtn";
import RightBtn from "../components/utils/RightBtn";
// Motion
import { motion } from "framer-motion"

const Home = () => {
    return (
        <div>
            <Header />
            <div className="container-home">
                <motion.div
                initial={{scale: 0, opacity: 0}}
                animate={{scale: 1, opacity: 1}}
                transition={{
                    duration: "2"
                }}
                >
                    <h1><span>Frédéric</span> <span>Bétaouaf</span></h1>
                    <h2><span>Développeur web</span> <span>&</span> <span>web mobile</span></h2>
                </motion.div>
                <motion.p
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{
                    duration: "3",
                    delay: "0.5"
                }}
                >
                    Bienvenue sur mon portfolio. Je vous souhaite une très bonne visite et surtout n'hésitez pas à me contacter si mon profil vous intéresse.
                </motion.p>
                <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{
                    duration: "3",
                    delay: "0.5"
                }}
                >
                    <LeftBtn left={"/contact"} />
                    <RightBtn right={"/profil"}/>
                </motion.div>
            </div>
        </div>
    );
};

export default Home;