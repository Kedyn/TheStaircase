import { ITheme } from "themes/theme";
import { createUseStyles } from "react-jss";

export default createUseStyles((theme: ITheme) => ({
  root: {
    flexGrow: 1,
    flexBasis: 1,
    padding: "1rem",
    marginRight: "1rem",

    "@media (max-width: 900px)": {
      marginRight: "0",
      marginBottom: "1rem",
    },
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
}));
