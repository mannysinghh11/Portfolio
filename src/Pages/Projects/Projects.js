import React, { useEffect, useState } from "react";

import ProjectCard from "../../Components/ProjectCard/ProjectCard";

import "./ProjectStyle.css";

function Projects() {
    const [projectData, setProjectData] = useState();

    useEffect(() => {
        async function getGithubData() {
            let response = await fetch("https://api.github.com/users/mannysinghh11/repos");
            response = await response.json();

            setProjectData(response);
        }

        getGithubData();
    }, [])

    return (
        <div className="mainContentContainer">
            <div className="projectsContainer">
                {projectData ? (
                    projectData.map((item, index) => {
                        const { name, html_url, description } = item;
                        return (
                            <ProjectCard
                                key={index}
                                name={name}
                                url={html_url}
                                description={description}
                            />
                        )
                    })
                ) : (<></>)}
            </div>
        </div>
    )
}

export default Projects;