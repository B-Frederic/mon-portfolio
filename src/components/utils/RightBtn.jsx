// Icons
import {BsFillArrowRightCircleFill} from "react-icons/bs";
import { NavLink } from "react-router-dom";

const LeftBtn = (props) => {

    return (
        <div className="container-btn-right">
            {props.right && (
                <NavLink to={props.right}>
                    <BsFillArrowRightCircleFill className="container-btn--prev" />
                </NavLink>
            )}
        </div>
    );
};

export default LeftBtn;