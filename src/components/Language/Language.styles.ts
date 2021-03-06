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
