import { ITheme } from "themes/theme";
import { createUseStyles } from "react-jss";

export default createUseStyles((theme: ITheme) => ({
  root: {},
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
  resetWrapper: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    marginBottom: "1rem",
  },
  reset: {
    width: "80%",
    maxWidth: "250px",
    marginLeft: "0",
  },
  description: {
    fontSize: "smaller",
    textAlign: "center",
  },
}));
