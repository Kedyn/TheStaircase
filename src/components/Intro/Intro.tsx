import Button from "components/common/Button";
import Panel from "components/common/Panel";
import React from "react";
import useStyles from "./Intro.styles";
import { useTranslation } from "react-i18next";

export interface IIntroProps {
  onContinue(): void;
}

export default function Intro(props: IIntroProps): JSX.Element {
  const { t } = useTranslation();
  const classes = useStyles();

  return (
    <React.Fragment>
      <div className={classes.root}>
        <div className={classes.content}>
          <h1 className={classes.header}>{t("intro.welcome")}</h1>

          <div className={classes.description}>"{t("intro.description")}"</div>
          <div className={classes.author}>- JaKaTaK</div>

          <Panel title={t("intro.rules")} className={classes.rules}>
            <div className={classes.rule}>&rarr; {t("intro.ruleOne")}</div>
            <div className={classes.rule}>&rarr; {t("intro.ruleTwo")}</div>
            <div className={classes.rule}>&rarr; {t("intro.ruleThree")}</div>
          </Panel>

          <Button
            onClick={() => {
              props.onContinue();
            }}
            className={classes.continue}
          >
            {t("global.continue")}
          </Button>
        </div>
      </div>
    </React.Fragment>
  );
}
