import React from "react";
import { motion } from "framer-motion";

import './AboutStyle.css'
import SocialBar from "../../Components/SocialBar/SocialBar";

const profilePicture = require("../../assets/manny_picture.jpg");

function About() {

    return (
        <motion.div className="aboutContainer">
            <div className="aboutTitleContainer">
                <div class="divider"></div>
                <span className="aboutTitleText">About Me</span>
                <div class="divider"></div>
            </div>

            <div className="aboutDescriptionContainer">
                <div className="aboutTextContainer">
                    <p>
                        Hi there! My name is Manpreet Singh, but most people call me Manny. I love creating
                        applications for users. I've grown fond of using React and Front-end development.
                        Currently, I'm delving into Back-end development in my free time.
                    </p>

                    <p>
                        My love of programming started back in high school where I wanted to create a simple
                        pop-up that you could never close, all for a prank. That was the gateway into creating
                        more complex programs and learning about Computer Science.
                    </p>

                    <p>
                        Fast forward to today, I am currently working as a Software Engingeer at Genista
                        Biosciences working on both mobile and web apps.
                    </p>
                </div>

                <div className="aboutImageContainer">
                    <img src={profilePicture} className="profilePicture" alt="manny" />
                </div>
            </div>

            <br />
            
            <SocialBar />
        </motion.div>
    )
}

export default About;