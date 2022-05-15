import { motion } from "framer-motion";
import { FaFolder, FaGithubSquare } from "react-icons/fa";

import "./ProjectCardStyle.css";

function handleClick(url) {
    window.open(url, "_blank");
}

function ProjectCard(props) {
    const { name, url, description } = props;
    return (
        <motion.div className="projectCardContainer">
            <div className="projectIconContainer">
                <FaGithubSquare className="projectIcon" onClick={() => handleClick(url)}/>
            </div>
            <p className="nameText">{name}</p>
            <p className="descriptionText">{description}</p>
        </motion.div>
    )
}

export default ProjectCard;