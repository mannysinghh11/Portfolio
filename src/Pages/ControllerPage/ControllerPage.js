import { useEffect } from "react";

import NavBar from "../../Components/NavBar/NavBar";
import Experience from "../Experience.js/Experience";
import About from "../About/About";
import Projects from "../Projects/Projects";
import Home from "../Home/Home";

import "./ControllerPageStyle.css";

function ControllerPage() {
    const location = window.location;

    useEffect(() => {
        if (!location.href.includes("#")) {
            location.href = "#home";
        }
    }, [location]);

    return (
        <div className="mainContainer">
            <div className="navigationContainer">
                <NavBar />
            </div>

            <div className="paddingContainer">
                <div className="pageContainer" id="home">
                    <Home />
                </div>

                <div className="pageContainer" id="about">
                    <About />
                </div>

                <div className="pageContainer" id="experience">
                    <Experience />
                </div>

                <div className="pageContainer" id="projects">
                    <Projects />
                </div>
            </div>
        </div>
    )
}

export default ControllerPage;