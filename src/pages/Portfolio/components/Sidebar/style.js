import { css } from "@emotion/css"
import { primaryColor, secondaryColor } from "../../../../utils/colors.js";

export const style = {
    container: css({
        backgroundColor: secondaryColor,
        width: "250px",
        height: "100vh",

        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "20px",

        position: "sticky",
        top: "0",
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
    }),
    subHeaderTextContainer: css({
        fontSize: "14px",
    }),
    socialContainer: css({
        display: "flex",
        flexDirection: "column",
        gap: "15px",
        marginBottom: "15px",
    })
}