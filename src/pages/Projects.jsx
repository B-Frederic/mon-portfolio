// React
import { Link } from 'react-router-dom';
// Components
import Header from '../components/layout/Header';
import LeftBtn from '../components/utils/LeftBtn';
import RightBtn from '../components/utils/RightBtn';
import Filter from '../components/utils/Filter';
// Data
import dataProjects from '../data/data_projects';
// Icons
import { FaGithub, FaEye } from "react-icons/fa";

const Projects = () => {
    return (
        <div>
            <Header />
            <div className="container-projects">
            <Filter />
                <div className="container-projects--box">
                {
                    dataProjects.map((element, index) => (
                        <div className="container-projects--box-card" key={index}>
                            <h2>{element.title}</h2>
                            <span>{element.tag}</span>
                            <img src={element.img} alt={element.alt}></img>
                            <div className="container-projects--box-card-social">
                                <Link to={element.view} target="_blank" className="container-projects--box-card-social-link"><FaEye /></Link>
                                <Link to={element.code} target="_blank" className="container-projects--box-card-social-link"><FaGithub /></Link>
                            </div>
                        </div>        
                    ))
                }
                </div>
            </div>
            <div>
                <LeftBtn left={"/profil"} />
                <RightBtn right={"/competences"}/>
            </div>
        </div>
    );
};

export default Projects;