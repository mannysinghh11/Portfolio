import React from "react";

import './style.css';

import { pages } from "../../utils/Constant";
import NavBarDot from "../NavBarDot/NavBarDot";

function NavBar(props) {
    const { currentPage } = props;

    return (
        <div className="navBarContainer">
            {
                pages.map(function (item, index) {
                    let active = false;
                    if (item === currentPage) {
                        active = true;
                    }
                    return (
                        <NavBarDot key={index} itemName={item} active={active} />
                    )
                })
            }
        </div>
    )
}

export default NavBar;