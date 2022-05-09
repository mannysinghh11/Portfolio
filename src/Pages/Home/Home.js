import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faFilePdf } from '@fortawesome/free-solid-svg-icons'

import './style.css'

const profilePicture = require("../../assets/manny_picture.jpg");

const iconsArr = [
    { name: "linkedin", icon: faLinkedin, size: '4x' },
    { name: "github", icon: faGithub, size: '4x' },
    { name: "resume", icon: faFilePdf, size: '4x' },
];

function handleIconClick(e, icon, setLinksShown) {
    if (!icon) {
        setLinksShown(icon);
    } else {
        e.stopPropagation();
        if (icon === "linkedin") {
            window.open('https://www.linkedin.com/in/manpreet-singh96/', '_blank');
        } else if (icon === "github") {
            window.open('https://github.com/mannysinghh11', '_blank');
        } else if (icon === "resume") {
            window.open('https://github.com/mannysinghh11/Portfolio/raw/master/src/miscFiles/ManpreetSingh_Resume.pdf', '_blank');
        }
    }
}

function Home() {
    let navigate = useNavigate();
    let [linksShown, setLinksShown] = useState(false);

    return (
        <motion.div className="mainContentContainer" id="Home">
            {linksShown ? (
                <motion.div className="linksContainer" onClick={(e) => handleIconClick(e, false, setLinksShown)}
                    whileHover={{ scale: 1.1 }}
                >
                    {iconsArr.map((item, index) => {
                        return (
                            <motion.div onClick={(e) => handleIconClick(e, item.name)} className="socialIconContainer" key={index}>
                                <FontAwesomeIcon className="socialIcon" icon={item.icon} size='4x' />
                            </motion.div>
                        )
                    })}
                </motion.div>
            ) : (
                <motion.img src={profilePicture} className="profilePicture" alt="Profile"
                    whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}
                    onClick={() => setLinksShown(true)}
                />
            )}
            <p className="mainText">Manpreet Singh</p>

            <p className="subText">Software Engineer.</p>
        </motion.div>
    )
}

export default Home;