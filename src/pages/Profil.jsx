// Motion
import { motion } from "framer-motion";
// Components
import Header from "../components/layout/Header";
// Picture
import LeftBtn from "../components/utils/LeftBtn";
import RightBtn from "../components/utils/RightBtn";

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
                    repeat: Infinity,
                    repeatDelay: 6
                }}
                className="container-profil--picture">
                    <img src="../../src/assets/img/moi.png" alt="photo du créateur du portfolio" />
                </motion.div>
                <div className="container-profil--text">
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam, molestias veniam. Nostrum, architecto ea doloribus cum nulla placeat nam facilis enim fugit porro atque animi magnam cupiditate totam nobis, neque fuga accusamus. Nobis ducimus obcaecati voluptatem adipisci tempora, nihil laudantium consectetur voluptate, quos optio earum quasi rerum quo similique ipsa atque dolor ab! Eaque temporibus ex sed officia eum nihil dicta quaerat fugit ut adipisci ad error quis, quisquam cumque ab tenetur eligendi totam libero perferendis sequi at voluptatum provident! Laborum accusantium quia voluptatum odio quidem voluptate numquam temporibus sunt blanditiis vero necessitatibus enim soluta, quisquam, at quam velit iure. Ipsam numquam quis possimus debitis expedita? Perferendis molestias debitis commodi. Laboriosam dolorem vel reprehenderit cupiditate aut earum id eos sequi esse nemo expedita ipsa incidunt aperiam labore est, et, placeat assumenda non rerum voluptatum molestias facilis officiis? Obcaecati sequi, assumenda exercitationem sapiente perferendis dolorem eveniet in facilis quod architecto ratione, vel, vitae laudantium nostrum necessitatibus quisquam perspiciatis alias? Numquam porro assumenda quis similique autem, illum cumque! Ipsum aliquid iusto quis asperiores soluta non provident harum corrupti voluptas ratione maxime, quidem quo delectus quia eum deleniti ab nobis earum ex. Alias id itaque quis quod ducimus aliquid reiciendis nisi veritatis nihil rem, illo dicta provident architecto aut tenetur enim nobis corrupti autem voluptates maxime molestias impedit quibusdam. Laudantium, illo deleniti autem quia voluptates eveniet fuga. Consequatur necessitatibus commodi, voluptatem recusandae eveniet amet deleniti, perspiciatis consequuntur pariatur tempora quae odit cupiditate ex voluptates? Quae possimus optio repellendus neque ipsam minima, voluptates nisi molestiae numquam eos doloremque, quasi officia vel itaque perferendis pariatur consectetur fugiat sequi saepe assumenda quam fugit molestias? Exercitationem rem doloribus iste necessitatibus laudantium delectus quos. Numquam repellendus tempora reiciendis blanditiis maxime expedita fugit nihil voluptates libero, similique veritatis officia eos laboriosam itaque voluptas commodi deserunt quia. Expedita earum facere rerum, id laudantium doloribus asperiores ullam est sequi magni nostrum minima? Quae atque distinctio magni, ipsum ratione repellat magnam nemo vitae nihil repellendus dolor architecto? Provident quia, aut accusantium eligendi, totam quisquam placeat inventore esse distinctio dolorem ea neque. Nisi, dolore natus fuga facere culpa praesentium quaerat, ratione numquam, iure earum aspernatur repudiandae eligendi amet enim? Veniam earum ex aut cupiditate, sunt debitis possimus laudantium libero, provident iure ab eaque repellendus praesentium distinctio ipsam quos, eum ipsa ea illum doloremque modi eveniet. Nobis ratione animi, accusamus dolorum magnam enim aspernatur molestiae blanditiis repellat hic, iusto fugiat laudantium sunt voluptatum eligendi!
                    </p>
                </div>
            </div>
            <div>
                    <LeftBtn left={"/"} />
                    <RightBtn right={"/projets"}/>
            </div>
        </div>
    );
};

export default Profil;