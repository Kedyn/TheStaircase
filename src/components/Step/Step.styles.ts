import { ITheme } from "themes/theme";
import { createUseStyles } from "react-jss";

export default createUseStyles((theme: ITheme) => ({
  root: {
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
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
  motto: {
    marginTop: "1rem",
  },
  suggestions: {
    marginTop: "1rem",
  },
  suggestion: {
    width: "100%",
    textIndent: "-1rem",
    paddingLeft: "2rem",

    "&+div": {
      marginTop: "1rem",
    },

    marginBottom: 0,
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
