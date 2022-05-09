import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import NavBar from "../../Components/NavBar/NavBar";
import Experience from "../Experience.js/Experience";
import Home from "../Home/Home";
import Projects from "../Projects/Projects";

import { getDirection, getNextPage, getPrevPage } from "../../utils/Helper.js";
import { pages } from '../../utils/Constant.js';

import "./style.css";
import { createBrowserHistory } from "history";

async function handleScroll(e, navigate, currentPage, setScrollDirection, history) {
    //Decide what direction user wants to go
    let direction = getDirection(e.deltaY);

    //Figure out the next page and prev page
    let nextPage = getNextPage(currentPage);
    let prevPage = getPrevPage(currentPage);

    //Handle routes
    if (direction === "down") {
        setScrollDirection("down");
        if (nextPage !== undefined) {
            history.push("/" + pages[nextPage]);
            navigate("/" + pages[nextPage]);
        }
    } else {
        setScrollDirection("up");
        //Navigate
        if (prevPage !== undefined) {
            history.push("/" + pages[prevPage]);
            navigate("/" + pages[prevPage]);
        }
    }
}

function ControllerPage(props) {
    const { page } = props;

    const navigate = useNavigate();
    const history = createBrowserHistory();

    const [scrollDirection, setScrollDirection] = useState("down");

    const variants = {
        visible: { opacity: 1, x: 0, y: 0 },
        enter: (scrollDirection) => ({
            opacity: 0,
            y: scrollDirection === "down" ? window.innerHeight : -window.innerHeight
        }),
        exit: (scrollDirection) => ({
            opacity: 0,
            y: scrollDirection === "down" ? -window.innerHeight : window.innerHeight
        })
    }

    return (
        <div className="container" onWheel={(e) => handleScroll(e, navigate, page, setScrollDirection, history)}>
            <div className="navbarContainer">
                <NavBar currentPage={page} />
            </div>

            <AnimatePresence exitBeforeEnter custom={scrollDirection}>
                {page === "Home" ? (
                    <motion.div className="mainContent"
                        key="Home"
                        transition={{ duration: 1 }}
                        variants={variants}
                        custom={scrollDirection}
                        initial="enter"
                        animate="visible"
                        exit="exit"
                    >
                        <Home />
                    </motion.div>
                ) : page === "Experience" ? (
                    <motion.div className="mainContent"
                        key="Experience"
                        transition={{ duration: 1 }}
                        variants={variants}
                        custom={scrollDirection}
                        initial="enter"
                        animate="visible"
                        exit="exit"
                    >
                        <Experience />
                    </motion.div>
                ) : page === "Projects" ? (
                    <motion.div className="mainContent"
                        key="Projects"
                        transition={{ duration: 1 }}
                        variants={variants}
                        custom={scrollDirection}
                        initial="enter"
                        animate="visible"
                        exit="exit"
                    >
                        <Projects />
                    </motion.div>
                ) : (
                    <></>
                )}
            </AnimatePresence>
        </div>
    );
}

export default ControllerPage;