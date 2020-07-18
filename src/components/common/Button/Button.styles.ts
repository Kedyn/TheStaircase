import { ITheme } from "themes/theme";
import { createUseStyles } from "react-jss";

export default createUseStyles((theme: ITheme) => ({
  root: {
    padding: (props) => (props.padding != null ? props.padding : "1rem"),
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
  },
}));
