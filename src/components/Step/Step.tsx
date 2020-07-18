import Button from "components/common/Button";
import { IUnits } from "components/common/Units/Units";
import Panel from "components/common/Panel";
import React from "react";
import Rules from "components/common/Rules";
import Units from "components/common/Units";
import useStyles from "./Step.styles";
import { useTranslation } from "react-i18next";

export interface IStepProps {
  name: string;
  data: {
    rules: Array<string>;
    units: IUnits;
  };
  onNextStep(): void;
}

export default function Step(props: IStepProps): JSX.Element {
  const { rules, units } = props.data;
  const { t } = useTranslation();
  const classes = useStyles();

  return (
    <React.Fragment>
      <div className={classes.root}>
        <div className={classes.content}>
          <h1 className={classes.header}>{t(props.name)}</h1>

          <div className={classes.wrapper}>
            <Rules rules={rules} />
            <Units units={units} />
          </div>

          <div className={classes.motto}>
            <Panel title={t("global.mottoTitle")}>{t("global.motto")}</Panel>
          </div>

          <Button onClick={() => props.onNextStep()} className={classes.next}>
            {t("global.nextStep")}
          </Button>
        </div>
      </div>
    </React.Fragment>
  );
}
