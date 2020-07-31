import React from "react";
import useStyles from "./Race.styles";
import { useTranslation } from "react-i18next";

export interface IRaceProps {
  onNextStep(): void;
}

export default function Race(props: IRaceProps): JSX.Element {
  const { t } = useTranslation();
  const classes = useStyles();
  const races = ["terran", "protoss", "zerg"];

  return (
    <React.Fragment>
      <div className={classes.root}>
        <h2 className={classes.title}>{t("race.choose")}</h2>
        <div className={classes.wrapper}>
          {races.map((race, index) => (
            <div
              key={index}
              onClick={() => {
                localStorage.setItem("race", race);
                props.onNextStep();
              }}
              className={classes.panel}
            >
              <img
                src={`images/${race}.jpg`}
                className={classes.raceImage}
                alt={race}
              />
              <div className={classes.race}>{race}</div>
            </div>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
}
