import Panel from "../Panel";
import React from "react";
import useStyles from "./Units.styles";
import { useTranslation } from "react-i18next";

export interface IUnits {
  terran: Array<string>;
  protoss: Array<string>;
  zerg: Array<string>;
  extra: {
    number: number;
    units: {
      terran: Array<string>;
      protoss: Array<string>;
      zerg: Array<string>;
    };
  };
}

export interface IUnitsProps {
  units: IUnits;
}

export default function Units(props: IUnitsProps): JSX.Element {
  const { t } = useTranslation();
  const classes = useStyles();

  let units: Array<string> = [];

  switch (localStorage.getItem("race")) {
    case "terran":
      units = props.units.terran;
      break;
    case "protoss":
      units = props.units.protoss;
      break;
    case "zerg":
      units = props.units.zerg;
      break;
  }

  const name = localStorage.getItem("step") + "ExtraUnits";

  if (localStorage.getItem(name) !== null) {
    units = [...units, ...(localStorage.getItem(name) as string).split(" ")];
  }

  return (
    <React.Fragment>
      <Panel style="right" title={t("global.units")} className={classes.root}>
        <div className={classes.units}>
          {units.map((name: string, index: number) => (
            <img
              key={index}
              src={`images/${name}.jpg`}
              alt={name}
              className={classes.unit}
            />
          ))}
        </div>
      </Panel>
    </React.Fragment>
  );
}
