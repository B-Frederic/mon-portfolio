// Icons
import {BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill} from "react-icons/bs";
import { NavLink } from "react-router-dom";

const LeftBtn = (props) => {

    return (
        <div className="container-btn-left">
            {props.left && (
                <NavLink to={props.left}>
                    <BsFillArrowLeftCircleFill className="container-btn--prev" />
                </NavLink>
            )}
        </div>
    );
};

export default LeftBtn;