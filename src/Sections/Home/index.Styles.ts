import { createStyles } from "@material-ui/styles";
import { Theme } from "@material-ui/core";
import MainContainerMediaQueries from "../../Constants/MainContainerMediaQueries";

const Styles = (theme: Theme) => {
    const pageOffset = `${theme.spacing(16)}px`;
    return createStyles({
        container: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            marginBottom: "0px !important",
            [theme.breakpoints.up("md")]: {
                marginTop: `${theme.spacing(8)}px !important`,
                // paddingTop: pageOffset,
                height: `calc(100vh - ${theme.spacing(16)}px - ${pageOffset})`,
                flexDirection: "row-reverse",
            },
        },
        containerMediaQueries: { ...MainContainerMediaQueries(theme).root },
        avatar: {
            height: 240,
            width: 240,
            border: "20px solid rgba(0, 0, 0, 0.4)",
            background: "transparent",
        },
        avatarBorder: {
            border: "20px solid rgba(0, 0, 0, 0.9)",
            borderRadius: "50%",
            margin: "8px",
            [theme.breakpoints.up("md")]: {
                marginLeft: "6rem",
            },
        },
        promo: {
            backgroundColor: theme.palette.primary.main,
            borderTopRightRadius: 20,
            borderTopLeftRadius: 20,
            borderBottomRightRadius: 20,
            borderBottomLeftRadius: 0,
            padding: "10px 30px",
            fontWeight: "bold",
            fontSize: "14px",
            lineHeight: "24px",
            letterSpacing: "1px",
            margin: 8,
        },
        listItem: {
            borderRadius: 20,
            transition: "all 0.3s ease-in",
            cursor: "pointer",
            "&:hover": {
                backgroundColor: theme.palette.primary.main,
                color: theme.palette.background.default,
            },
        },
        listItemIcon: {
            marginRight: "10px",
        },
        name: {
            fontSize: 42,
            fontWeight: 600,
            lineHeight: "54px",
        },
        ContactsListHovered: {},
    });
};

export default Styles;
