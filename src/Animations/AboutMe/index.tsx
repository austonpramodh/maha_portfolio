import React from "react";
import { CircularProgress, Typography } from "@material-ui/core";
import { withStyles, WithStyles } from "@material-ui/styles";
import Styles from "./index.Styles";
import Animation from "./Animation";
import Axios from "axios";
// import animationData from "../../Assets/11528-web-site-development.json";

const AnimationLoading = (
    <div>
        <CircularProgress />
        <Typography>
            Animations are Beutiful..
            <br />
            So wait for them to Load.
        </Typography>
    </div>
);

interface AboutMeAnimationProps {
    animationDataUrl: string;
}

const AboutMeAnimation: React.FC<AboutMeAnimationProps & WithStyles<typeof Styles>> = ({ animationDataUrl }) => {
    const [animationData, setAnimationData] = React.useState<any>({});
    const [isPageLoaded, setPageLoaded] = React.useState(false);

    React.useLayoutEffect(() => {
        Axios.get(animationDataUrl).then(response => {
            setAnimationData(response.data);
            setPageLoaded(true);
        });
    }, []);

    if (isPageLoaded) return <Animation animationData={animationData} />;

    return AnimationLoading;
};

export default withStyles(Styles)(AboutMeAnimation);
