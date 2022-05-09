import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import "./style.css";

function NavBarDot(props) {
    const { active, itemName } = props;

    let backgroundColor = "";
    if (active) {
        backgroundColor = "#082032";
    }

    return (
        <Link to={"/" + itemName}>
            <motion.div className="navBarDot" style={{ backgroundColor: backgroundColor }}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8}}>
            </motion.div>
        </Link>
    )
}

export default NavBarDot;