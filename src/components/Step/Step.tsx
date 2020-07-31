import { Trans, useTranslation } from "react-i18next";

import Button from "components/common/Button";
import { IUnits } from "components/common/Units/Units";
import Panel from "components/common/Panel";
import React from "react";
import Rules from "components/common/Rules";
import Units from "components/common/Units";
import useStyles from "./Step.styles";

export interface IStepProps {
  name: string;
  data: {
    rules: Array<string>;
    units: IUnits;
  };
  onPrevStep(): void;
  onNextStep(): void;
}

export default function Step(props: IStepProps): JSX.Element {
  const { rules, units } = props.data;
  const { t } = useTranslation();
  const classes = useStyles();
  const [active, setActive] = React.useState("none");
  const leagues = [
    "bronze",
    "silver",
    "gold",
    "platinum",
    "diamond",
    "master",
    "grandmaster",
  ];

  const addMatch = () => {
    if (active !== "none") {
      const name = localStorage.getItem("step") + "Matches";

      let matches: string = "";

      if (localStorage.getItem(name) !== null) {
        matches = `${localStorage.getItem(name)} ${active}`;
      } else {
        matches = active;
      }

      localStorage.setItem(name, matches);

      setActive("none");
    }
  };

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
            <Panel title={t("global.matches")}>
              <div className={classes.leagueForm}>
                {leagues.map((league, index) => (
                  <img
                    key={index}
                    src={`images/${league}.png`}
                    alt={league}
                    className={classes.leagueOption}
                    data-active={active === league}
                    onClick={() => setActive(league)}
                  />
                ))}

                <button onClick={() => addMatch()} className={classes.button}>
                  {t("global.addMatch")}
                </button>
              </div>

              <div className={classes.matchList}>
                {localStorage
                  .getItem(localStorage.getItem("step") + "Matches")
                  ?.split(" ")
                  .map((league, index) => (
                    <img
                      key={index}
                      src={`images/${league}.png`}
                      alt={league}
                      className={classes.league}
                    />
                  ))}
              </div>

              <div className={classes.description}>
                <Trans i18nKey="global.matchesDescription">
                  After each of your match upload your replay to{" "}
                  <a href="https://gggreplays.com/" target="_blank">
                    GGGReplays
                  </a>{" "}
                  and added to the matches.
                </Trans>
              </div>
            </Panel>
          </div>

          <div className={classes.motto}>
            <Panel title={t("global.mottoTitle")}>{t("global.motto")}</Panel>
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
