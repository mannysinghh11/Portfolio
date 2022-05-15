import "./ExperienceCarouselStyle.css";

import experience from "../../assets/json/experience.json";
import { useState } from "react";

function handleClick(index, setCurrentPosition) {
    setCurrentPosition(experience[index]);
}

function ExperienceCarousel() {
    const [currentPosition, setCurrentPosition] = useState(experience[0]);

    return (
        <div className="carouselContainer">
            <div className="carouselPositionTitlesContainer">
                {experience.map((item, index) => {
                    let buttonClass = "experienceButton";

                    if(item === currentPosition){
                        buttonClass = "experienceButton experienceButtonActive";
                    }
                    return (
                        <span onClick={() => handleClick(index, setCurrentPosition)} className={buttonClass}>
                            {item.location}
                        </span>
                    );
                })}
            </div>

            <div className="carouselPositionDescriptionContainer">
                <div className="positionTitleContainer">
                    <span className="positionTitle">{currentPosition.positionTitle} @ {currentPosition.location}</span>
                    {currentPosition.dateEnd ? (
                        <span className="positionTitle">{currentPosition.dateStart} - {currentPosition.dateEnd}</span>
                    ) : (
                        <span className="positionTitle">{currentPosition.dateStart} - Current</span>
                    )}
                </div>

                <br />

                <ul className="positionDescriptionList">
                    {currentPosition.description.map((item, index) => {
                        return (
                            <li key={index}>
                                {item}
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default ExperienceCarousel;