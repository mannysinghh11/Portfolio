import { motion } from "framer-motion";

import "./style.css";

function handleClick(url) {
    window.open(url, "_blank");
}

function ProjectCard(props) {
    const { name, url, description } = props;
    return (
        <motion.div whileHover={{ scale: 1.05 }} className="projectCardContainer"
            onClick={() => handleClick(url)}
        >
            <p className="nameText">{name}</p>
            <p className="descriptionText">{description}</p>
        </motion.div>
    )
}

export default ProjectCard;