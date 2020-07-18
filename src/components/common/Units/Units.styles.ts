import { ITheme } from "themes/theme";
import { createUseStyles } from "react-jss";

export default createUseStyles((theme: ITheme) => ({
  root: {
    flexGrow: 1,
    flexBasis: 1,
    flexDirection: "column",
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
  },
}));
