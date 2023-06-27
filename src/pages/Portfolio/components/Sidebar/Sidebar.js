
import emoji from "../../../../assets/images/emoji.png";
import { style } from "./style";

function Sidebar() {
    return (
        <div className={style.container}>
            <div className={style.headerContainer}>
                <div className={style.emojiIconContainer}>
                    <img src={emoji} alt="emoji" className={style.emojiImage} />
                </div>

                <div className={style.headerTextContainer}>
                    Manpreet Singh
                </div>
            </div>

            <div>
                Email
            </div>

            <div>
                LinkedIn
                Github
                Resume
            </div>

            <div>
                About me
            </div>
        </div>
    );
}

export default Sidebar;