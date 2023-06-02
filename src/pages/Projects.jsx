// React
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// Components
import Header from '../components/layout/Header';
import LeftBtn from '../components/utils/LeftBtn';
import RightBtn from '../components/utils/RightBtn';
// Data
import dataProjects from '../data/data_projects';
import dataFilter from '../data/data_filter';
// Icons
import { FaGithub, FaEye } from "react-icons/fa";


const Projects = () => {

  const [selectFilter, setSelectFilter] = useState([]);
  const [filterProject, setFilterProject] = useState(dataProjects);

  const handleFilter = (type) => {
  
    if(selectFilter.includes(type)){

        let filters = selectFilter.filter((element) => element !== type);
        setSelectFilter(filters);
        
    } else {

        setSelectFilter([type]);
    }
  }

  const filterProjects = () => {

    if (selectFilter.length > 0) {

        let tempProject = selectFilter.map((element) => {

            let temp = dataProjects.filter((item) => 
                (item.front === element) || 
                (item.css === element) ||
                (item.redux === element) || 
                (item.back === element) || 
                (item.tool === element)|| 
                (item.payment === element)
            )

            return temp;
        });
        
        setFilterProject(tempProject.flat());

    } else {
        setFilterProject([...dataProjects]);
    }
  };

  useEffect(() => {
    
    filterProjects();

  }, [selectFilter])
  
  
    return (
        <div>
            <Header />
            <div className="container-projects">
                <div className="container-projects--filter">
                    <h2>Filtrer :</h2>
                    <div className="container-projects--filter-list">
                        <ul>
                            {
                                dataFilter.map((element, index) => (
                                    <li 
                                    key={index} 
                                    style={{ borderColor: element.style}}
                                    className={selectFilter?.includes(element.active) ? "active" : ""} 
                                    onClick={() => handleFilter(element.filter)}
                                    >
                                    {element.text}
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
                <div className="container-projects--box">
                {
                    filterProject.map((element, index) => (
                        <div
                        className="container-projects--box-card" key={index}>
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