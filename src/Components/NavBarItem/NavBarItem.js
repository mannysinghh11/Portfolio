import "./NavBarItemStyle.css";

function NavBarItem(props) {
    const { itemName } = props;
    const navLink = "#" + itemName.toLowerCase();
    return (
        <a href={navLink} className="navBarItemText">{itemName}</a>
    )
}

export default NavBarItem;