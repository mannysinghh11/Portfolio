import React, { useEffect, useState } from "react";

import ExperienceCard from "../../Components/ExperienceCard/ExperienceCard";

import "./ExperienceStyle.css";
import experienceInformation from "../../assets/json/experience.json";
import educationInformation from "../../assets/json/education.json";
import CustomModal from "../../Components/CustomModal/CustomModal";

function handleWorkExperienceClicked(positionTitle, location, description, setModalInformation, setModal) {
    let informationObj = {
        positionTitle: positionTitle,
        location: location,
        description: description
    };

    setModalInformation(informationObj);
    setModal(true);
}

function handleScroll(e, modal) {
    if(modal){
        e.stopPropagation();
    }
}

function Experience() {
    const [modal, setModal] = useState(false);
    const [modalInformation, setModalInformation] = useState();

    return (
        <div className="mainContentContainer" onWheel={(e) => handleScroll(e, modal)}>
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
                            <div key={index} onClick={() => handleWorkExperienceClicked(positionTitle, location, description, setModalInformation, setModal)}>
                                <ExperienceCard
                                    cityState={cityState}
                                    dateStart={dateStart}
                                    dateEnd={dateEnd}
                                    image={imageURL}
                                    location={location}
                                    type={type}
                                    positionTitle={positionTitle}
                                />
                            </div>
                        )
                    })
                ) : <></>}
            </div>

            <CustomModal isOpen={modal} setModal={setModal} modalInformation={modalInformation}/>
        </div>
    )
}

export default Experience;