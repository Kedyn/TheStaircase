import React from "react";
import useStyles from "./Footer.styles";
import { useTranslation } from "react-i18next";

export interface IFooterProps {}

export default function Footer(props: IFooterProps): JSX.Element {
  const { t } = useTranslation();
  const classes = useStyles();

  return (
    <React.Fragment>
      <div className={classes.root}>
        <a href="https://github.com/Kedyn/TheStaircase#readme">
          {t("global.about")}
        </a>{" "}
        <a href="https://github.com/Kedyn/TheStaircase">
          {t("global.contribute")}
        </a>
      </div>
    </React.Fragment>
  );
}
