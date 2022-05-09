import { motion } from "framer-motion";

import "./style.css";

function ExperienceCard(props) {
    const { cityState, dateEnd, dateStart, description, image, location, type } = props;
    if (type === "Education") {
        return (
            <div className="experienceCardContainer">
                <div className="imageContainer">
                    <img src={image} className="experienceImage" alt="education"/>
                </div>

                <div className="informationContainer">
                    <p>{location}</p>
                    {dateStart ? (
                        <p>{description[0]} {dateStart} - {dateEnd}</p>
                    ) : (
                        <p>{description[0]} {dateEnd}</p>
                    )}
                </div>
            </div>
        );
    } else if (type === "Experience") {
        return (
            <motion.div whileHover={{ scale: 1.05 }} className="experienceCardContainer experience">
                <div className="imageContainer">
                    <img src={image} className="experienceImage" alt="company"/>
                </div>

                <div className="informationContainer">
                    <p>{location} - {cityState}</p>

                    {dateEnd ? (
                        <p>{dateStart} - {dateEnd}</p>
                    ) : (
                        <p>{dateStart} - Current</p>
                    )}
                </div>
            </motion.div>
        )
    }
}

export default ExperienceCard;