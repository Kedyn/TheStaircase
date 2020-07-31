import { ITheme } from "themes/theme";
import { createUseStyles } from "react-jss";

export default createUseStyles((theme: ITheme) => ({
  root: {
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    overflowY: "auto",
    padding: "1rem",

    "@media (max-width: 900px)": {
      justifyContent: "normal",
    },
  },
  title: {
    fontFamily: "Starcraft, impact",
    fontSize: "2rem",
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
