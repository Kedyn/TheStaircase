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
  },
  title: {
    fontFamily: "Starcraft, impact",
    fontSize: "5vw",
    textAlign: "center",
  },
  special: {
    color: theme.primary,
  },
  wrapper: {
    display: "flex",
  },
}));
