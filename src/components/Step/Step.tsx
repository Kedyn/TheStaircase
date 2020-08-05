import Button from "components/common/Button";
import { IUnits } from "components/common/Units/Units";
import Matches from "components/common/Matches";
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
    suggestions: {
      terran: Array<string>;
      protoss: Array<string>;
      zerg: Array<string>;
    };
  };
  onPrevStep(): void;
  onNextStep(): void;
}

export default function Step(props: IStepProps): JSX.Element {
  const { rules, units } = props.data;
  const { t } = useTranslation();
  const classes = useStyles();

  let suggestions: Array<string> = [];

  const nextStep = () => {
    const name = localStorage.getItem("step") + "Matches";

    if (localStorage.getItem(name) !== null) {
      if (
        (localStorage.getItem(name)?.match(/master/g)?.length as number) >= 4
      ) {
        props.onNextStep();
      }
    }
  };

  switch (localStorage.getItem("race")) {
    case "terran":
      suggestions = props.data.suggestions.terran;
      break;
    case "protoss":
      suggestions = props.data.suggestions.protoss;
      break;
    case "zerg":
      suggestions = props.data.suggestions.zerg;
      break;
  }

  return (
    <React.Fragment>
      <div className={classes.root}>
        <div className={classes.content}>
          <h1 className={classes.header}>{t(props.name)}</h1>

          <div className={classes.wrapper}>
            <Rules rules={rules} />
            <Units units={units} />
          </div>

          <div className={classes.matches}>
            <Matches name={props.name} />
          </div>

          <div className={classes.motto}>
            <Panel title={t("global.mottoTitle")}>{t("global.motto")}</Panel>
          </div>

          <div className={classes.suggestions}>
            <Panel title={t("global.suggestions")}>
              {suggestions.map((suggestion: string, index: number) => (
                <div key={index} className={classes.suggestion}>
                  &rarr; {t(suggestion)}
                </div>
              ))}
            </Panel>
          </div>

          <div className={classes.navWrapper}>
            {localStorage.getItem("step") !== "stepOne" && (
              <Button
                onClick={() => props.onPrevStep()}
                className={classes.nav}
              >
                {t("global.prevStep")}
              </Button>
            )}

            <Button onClick={() => nextStep()} className={classes.nav}>
              {t("global.nextStep")}
            </Button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
