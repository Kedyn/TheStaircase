import { ITheme } from "themes/theme";
import { createUseStyles } from "react-jss";

export default createUseStyles((theme: ITheme) => ({
  root: {
    width: "100vw",
    height: "100vh",
    padding: "1rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",

    "@media (max-width: 900px)": {
      justifyContent: "normal",
      marginBottom: "3rem",
    },
  },
  title: {
    fontFamily: "Starcraft, impact",
    fontSize: "3rem",
    textAlign: "center",
    textTransform: "uppercase",
  },
  wrapper: {
    display: "flex",
    paddingBottom: "2rem",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  panel: {
    border: theme.border,
    backgroundColor: theme.backgroundBox,
    cursor: "pointer",
    fontFamily: "Starcraft, impact",
    textTransform: "uppercase",
    textAlign: "center",

    "&+div": {
      marginLeft: "1rem",
    },

    "&:hover": {
      backgroundColor: theme.activeBackgroundBox,
      border: theme.activeBorder,
    },

    "@media (max-width: 900px)": {
      "&+div": {
        marginLeft: "0",
        marginTop: "1rem",
      },
    },
  },
  raceImage: {
    opacity: 0.8,

    "&:hover": {
      opacity: 1,
    },
  },
  race: {
    transform: "translateY(-2rem)",
    height: 0,
  },
}));
