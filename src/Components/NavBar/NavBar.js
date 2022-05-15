import React from "react";

import './NavBarStyle.css';

import { pages } from "../../utils/Constant";
import NavBarItem from "../NavBarItem/NavBarItem";

function NavBar(props) {
    return (
        <div className="navBarContainer">
            <a className="navBarTitleText" href="#home">Manpreet Singh</a>

            <div className="navBarItemContainer">
                {
                    pages.map(function (item, index) {
                        return (
                            <NavBarItem key={index} itemName={item} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default NavBar;