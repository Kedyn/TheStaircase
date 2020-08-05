import { ITheme } from "themes/theme";
import { createUseStyles } from "react-jss";

export default createUseStyles((theme: ITheme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height: "60px",
    background: theme.background,
    position: "sticky",
    top: 0,

    "@media (min-width: 900px)": {
      clipPath:
        "polygon(0 0, 0 100%, 10% 100%, 12% 90%, 88% 90%, 90% 100%, 100% 100%, 100% 0, 0 0)",
    },
  },
  title: {
    fontFamily: "Starcraft, impact",
    textAlign: "center",
    padding: 0,
    margin: 0,
  },
  special: {
    color: theme.primary,
  },
}));
