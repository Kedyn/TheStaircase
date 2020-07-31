import { ITheme } from "themes/theme";
import { createUseStyles } from "react-jss";

export default createUseStyles((theme: ITheme) => ({
  root: {
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    overflowY: "auto",
    padding: "1rem",

    "@media (max-width: 900px)": {
      justifyContent: "normal",
    },
  },
  content: {
    maxWidth: "1200px",
  },
  header: {
    marginBottom: "1rem",
    fontFamily: "Starcraft, impact",
    textAlign: "center",
  },
  wrapper: {
    display: "flex",

    "@media (max-width: 900px)": {
      flexDirection: "column",
      justifyContent: "normal",
    },
  },
  matches: {
    marginTop: "1rem",
  },
  leagueForm: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    marginBottom: "1rem",
  },
  leagueOption: {
    height: "3rem",
    padding: "0.5rem",
    background: theme.backgroundBox,
    border: theme.border,
    color: theme.activeBorderColor,
    cursor: "pointer",
    opacity: "0.75",

    "&:hover": {
      opacity: "1",
      background: theme.activeBackgroundBox,
      border: theme.activeBorder,
    },

    "&[data-active='true']": {
      opacity: "1",
      background: theme.activeBackgroundBox,
      border: theme.activeBorder,
    },
  },
  button: {
    display: "inline-block",
    padding: "0.5rem",
    background: theme.backgroundBox,
    border: theme.border,
    color: theme.primary,
    marginLeft: "1rem",
    cursor: "pointer",

    "&:hover": {
      background: theme.activeBackgroundBox,
      border: theme.activeBorder,
    },
  },
  matchList: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    marginBottom: "1rem",
  },
  league: {
    height: "2rem",
    marginTop: "1rem",

    "&+img": {
      marginLeft: "1rem",
    },
  },
  description: {
    fontSize: "smaller",
    textAlign: "center",
  },
  motto: {
    marginTop: "1rem",
  },
  navWrapper: {
    display: "flex",
    justifyContent: "space-between",
  },
  nav: {
    flexGrow: 1,
    marginTop: "1rem",
    marginBottom: "1rem",
  },
}));
