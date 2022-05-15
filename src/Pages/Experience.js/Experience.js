import React, { useState } from "react";
import { motion } from "framer-motion";

import "./ExperienceStyle.css";
import ExperienceCarousel from "../../Components/ExperienceCarousel/ExperienceCarousel";

function Experience() {
    return (
        <motion.div className="experienceContainer">
            <div className="experienceTitleContainer">
                <div class="divider"></div>
                <span className="experienceTitleText">Experience</span>
                <div class="divider"></div>
            </div>

            <br />
            <br />

            <div className="experienceCarouselContainer">
                <ExperienceCarousel />
            </div>
        </motion.div>
    )
}

export default Experience;