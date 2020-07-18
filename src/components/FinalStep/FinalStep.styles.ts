import { ITheme } from "themes/theme";
import { createUseStyles } from "react-jss";

export default createUseStyles((theme: ITheme) => ({
  root: {
    width: "100vw",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",

    "@media (max-width: 900px)": {
      flexDirection: "column",
      justifyContent: "normal",
      padding: "1rem",
    },
  },
  header: {
    marginBottom: "1rem",
    fontFamily: "Starcraft, impact",
    textAlign: "center",
  },
  content: {},
}));
