import { ITheme } from "themes/theme";
import { createUseStyles } from "react-jss";

export default createUseStyles((theme: ITheme) => ({
  root: {
    width: "100vw",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    "@media (max-width: 900px)": {
      flexDirection: "column",
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
  motto: {
    marginTop: "1rem",
  },
  next: {
    marginTop: "1rem",
    marginBottom: "1rem",
  },
}));
