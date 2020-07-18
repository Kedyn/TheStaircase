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
  units: {
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  unit: {
    maxWidth: "64px",
    maxHeight: "64px",
    cursor: "pointer",
    opacity: "0.75",

    "&:hover": {
      opacity: "1",
    },

    "&[data-active='true']": {
      opacity: 1,
      border: theme.activeBorder,
    },

    "&+img": {
      marginLeft: "1rem",

      "@media (max-width: 900px)": {
        marginLeft: "0",
        marginBottom: "1rem",
      },
    },
  },
  continue: {
    marginTop: "1rem",
    marginBottom: "1rem",
  },
}));
