
import emoji from "../../../../assets/images/emoji.png";
import emailIcon from "../../../../assets/icons/emailIcon.png";
import linkedInIcon from "../../../../assets/icons/linkedInIcon.png";
import githubIcon from "../../../../assets/icons/githubIcon.png";
import resumeIcon from "../../../../assets/icons/resumeIcon.png";

import { style } from "./style";

import { formatNameWithNickname } from "../../../../utils/helper";
import { email, fullName, nickname, linkedIn, github } from "../../../../utils/const";
import SidebarTile from "../SidebarTile/SidebarTile";

function Sidebar() {
    return (
        <div className={style.container}>
            <div className={style.headerContainer}>
                <div className={style.emojiIconContainer}>
                    <img src={emoji} alt="emoji" className={style.emojiImage} />
                </div>

                <span className={style.headerTextContainer}>{formatNameWithNickname(fullName, nickname)}</span>

                <span className={style.subHeaderTextContainer}>
                    Programmer
                </span>
            </div>

            <div>
                About me
            </div>

            <div>
                Navigation
            </div>

            <div className={style.socialContainer}>
                <SidebarTile icon={emailIcon} textToDisplay={email} />
                <SidebarTile icon={linkedInIcon} textToDisplay={linkedIn} />
                <SidebarTile icon={githubIcon} textToDisplay={github} />
                <SidebarTile icon={resumeIcon} textToDisplay="Click to download Resume" />
            </div>
        </div>
    );
}

export default Sidebar;