// React
import {  Link } from "react-router-dom";
// Components
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import LeftBtn from "../components/utils/LeftBtn";
import RightBtn from "../components/utils/RightBtn";
// Icons
import { BsLinkedin } from "react-icons/bs";
import { TbMail } from "react-icons/tb";

const Contact = () => {

    return (
        <div>
            <Header />
            <div className="container-contact">
                <h2>Contact</h2>
                <div className="container-contact--linkedin">
                    <p>
                        Contactez moi par Linkedin :
                    </p>
                    <div>
                        <Link to="https://www.linkedin.com/in/frederic-betaouaf/" target="_blank"><BsLinkedin className="container-contact--linkedin-icon" /></Link>
                    </div>
                </div>
                <div className="container-contact--email">
                    <p>
                        Ou directement par email:
                    </p>
                    <div className="container-contact--email-icon">
                    <Link to="mailto:frederic.betaouaf33@gmail.com" target="_blank"><TbMail /></Link>
                    </div>
                </div>
            </div>
            <div>
                <LeftBtn left={"/competences"} />
                <RightBtn right={"/"}/>
            </div>
            <Footer />
        </div>
    );
};

export default Contact;