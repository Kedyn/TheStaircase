import React from "react";
import useStyles from "./FinalStep.styles";
import { useTranslation } from "react-i18next";

export interface IFinalStepProps {}

export default function FinalStep(props: IFinalStepProps): JSX.Element {
  const { t } = useTranslation();
  const classes = useStyles();

  return (
    <React.Fragment>
      <div className={classes.root}>
        <h1 className={classes.header}>{t("finalStep.title")}</h1>
        <div className={classes.content}>{t("finalStep.content")}</div>
      </div>
    </React.Fragment>
  );
}
