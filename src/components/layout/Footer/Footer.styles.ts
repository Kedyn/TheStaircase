import { ITheme } from "themes/theme";
import { createUseStyles } from "react-jss";

export default createUseStyles((theme: ITheme) => ({
  root: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    height: "60px",
    background: theme.background,

    "@media (min-width: 900px)": {
      clipPath:
        "polygon(0 0, 10% 0, 12% 10%, 88% 10%, 90% 0, 100% 0, 100% 100%, 0 100%, 0 0)",
    },
  },
}));
