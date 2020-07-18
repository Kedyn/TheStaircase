import { ITheme } from "themes/theme";
import { createUseStyles } from "react-jss";

export default createUseStyles((theme: ITheme) => ({
  root: {
    border: theme.border,
    backgroundColor: theme.backgroundBox,
    padding: "1rem",
  },
  subtitle: {
    fontFamily: "Starcraft, impact",
    marginBottom: "1rem",
    textAlign: "center",
  },
}));
