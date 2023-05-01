import { NavLink } from "react-router-dom";


import "./style.css"

const ProjectCategory = ({title, img, index}) => {
    return ( 
        <NavLink to={`/category/${index+1}`}>
            <li className="project">
                    
                    <img src={img} alt="Project img" className="project__img" />
                    <h3 className="project__title">{title}</h3>
                    
                </li>
        </NavLink>
        
     );
}
 
export default ProjectCategory;