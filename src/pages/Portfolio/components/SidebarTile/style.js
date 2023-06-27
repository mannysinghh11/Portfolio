import { css } from "@emotion/css";
import { accentColor, primaryColor } from "../../../../utils/colors.js";

export const style = {
    container: css({
        width: "100%",
    }),
    iconContainer: css({
        backgroundColor: primaryColor,
        padding: "10px",
        borderRadius: "5px",

        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "10px",
    }),
    icon: css({
        height: "30px",
    }),
    text: css({
        color: accentColor,
        fontSize: "11px"
    })
}