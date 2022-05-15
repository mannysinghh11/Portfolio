import { FaLinkedin, FaGithubSquare, FaFilePdf } from "react-icons/fa";

import "./SocialBarStyle.css";

function handleClick(link) {
    window.open(link, "_blank");
}

function SocialBar() {
    const icons = [
        { name: "Github", icon: FaGithubSquare, link: "https://github.com/mannysinghh11" },
        { name: "LinkedIn", icon: FaLinkedin, link: "https://www.linkedin.com/in/manpreet-singh96/" },
        { name: "Resume", icon: FaFilePdf, link: "https://github.com/mannysinghh11/Portfolio/blob/master/src/additionalFiles/ManpreetSingh_Resume.pdf" }
    ];

    return (
        <div className="socialBarContainer">
            {icons.map((item, index) => {
                return (
                    <item.icon
                        key={index}
                        className="socialBarIcon"
                        onClick={() => handleClick(item.link)}
                    />
                )
            })}
        </div>
    )
}

export default SocialBar;