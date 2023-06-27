import { style } from "./style";

function SidebarTile(props) {
    const { icon, textToDisplay } = props;
    return (
        <div className={style.container}>
            <div className={style.iconContainer}>
                <img src={icon} alt="emoji" className={style.icon} />
                <span className={style.text}>{textToDisplay}</span>
            </div>
        </div>
    );
}

export default SidebarTile;