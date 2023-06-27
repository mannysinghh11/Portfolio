import { css } from "@emotion/css"
import { primaryColor, secondaryColor } from "../../../../utils/colors.js";

export const style = {
    container: css({
        backgroundColor: secondaryColor,
        width: "250px",
        height: "600px",
        borderRadius: "15px",

        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",

        filter: "drop-shadow(0px 0px 4px #5F7ADB)"
    }),
    headerContainer: css({
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",

        gap: "5px",
    }),
    emojiIconContainer: css({
        backgroundColor: primaryColor,
        padding: "15px",
        borderRadius: "15px",
        marginTop: "15px",
    }),
    emojiImage: css({
        height: "80px",
    }),
    headerTextContainer: css({
        fontSize: "20px",
    })
}