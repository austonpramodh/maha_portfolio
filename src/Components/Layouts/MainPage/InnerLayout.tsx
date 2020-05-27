/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

// import Header from "../Header";
import React from "react";
import { WithStyles, withStyles } from "@material-ui/styles";

import { createStyles, Theme } from "@material-ui/core";
import StarsBackground from "../../../Assets/stars.492b41ed.jpg";

const Styles = (theme: Theme) => {
    return createStyles({
        container: {
            transition: "background 1.5s linear",
            minHeight: "100vh",
            backgroundColor: theme.palette.type === "light" ? "#1f4c63" : theme.palette.background.default,
            background: theme.palette.type === "light" ? `url(${StarsBackground})` : "",
            backgroundAttachment: "fixed",
        },
        "@global": {
            html: {
                scrollBehavior: "smooth", // required for smooth scrolling between link tags from navbar
            },
        },
    });
};

const InnerLayout: React.SFC<WithStyles<typeof Styles>> = ({ children, classes }) => {
    return (
        <>
            <div className={classes.container}>{children}</div>
        </>
    );
};

export default withStyles(Styles)(InnerLayout);
