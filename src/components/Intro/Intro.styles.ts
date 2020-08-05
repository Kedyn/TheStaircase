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
  description: {},
  author: {
    textAlign: "right",
  },
  rules: {
    marginTop: "2rem",
  },
  rule: {
    width: "100%",
    textIndent: "-1rem",
    paddingLeft: "2rem",

    "&+div": {
      marginTop: "1rem",
    },

    marginBottom: 0,
  },
  continue: {
    marginTop: "1rem",
  },
}));
