import React from "react";

import ExperienceCard from "../../Components/ExperienceCard/ExperienceCard";

import "./ExperienceStyle.css";
import experienceInformation from "../../assets/json/experience.json";
import educationInformation from "../../assets/json/education.json";

function handleWorkExperienceClicked() {
    console.log("experience");
}

function Experience() {
    return (
        <div className="mainContentContainer">
            <div className="mainEducationContainer">
                {educationInformation ? (
                    educationInformation.map((item, index) => {
                        const { cityState, dateEnd, dateStart, description, imageURL, location, type, positionTitle } = item;
                        return (
                            <ExperienceCard
                                key={index}
                                cityState={cityState}
                                dateStart={dateStart}
                                dateEnd={dateEnd}
                                description={description}
                                image={imageURL}
                                location={location}
                                type={type}
                                positionTitle={positionTitle}
                            />
                        )
                    })
                ) : <></>}
            </div>

            <div className="experienceContainer">
                {experienceInformation ? (
                    experienceInformation.map((item, index) => {
                        const { cityState, dateEnd, dateStart, description, imageURL, location, type, positionTitle } = item;
                        return (
                            <ExperienceCard
                                key={index}
                                cityState={cityState}
                                dateStart={dateStart}
                                dateEnd={dateEnd}
                                description={description}
                                image={imageURL}
                                location={location}
                                type={type}
                                positionTitle={positionTitle}
                            />
                        )
                    })
                ) : <></>}
            </div>
        </div>
    )
}

export default Experience;