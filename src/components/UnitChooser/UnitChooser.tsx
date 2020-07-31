import Button from "components/common/Button";
import { IUnits } from "components/common/Units/Units";
import Panel from "components/common/Panel";
import React from "react";
import useStyles from "./UnitChooser.styles";
import { useTranslation } from "react-i18next";

export interface IUnitChooserProps {
  data: {
    rules: Array<string>;
    units: IUnits;
  };
  onNextStep(): void;
}

export default function UnitChooser(props: IUnitChooserProps): JSX.Element {
  const { t } = useTranslation();
  const classes = useStyles();
  const [active, setActive] = React.useState<Array<string>>([]);
  const count = props.data.units.extra.number;

  let units: Array<string> = [];

  switch (localStorage.getItem("race")) {
    case "terran":
      units = props.data.units.extra.units.terran;
      break;
    case "protoss":
      units = props.data.units.extra.units.protoss;
      break;
    case "zerg":
      units = props.data.units.extra.units.zerg;
      break;
  }

  const addActive = (name: string): void => {
    if (active.find((element) => element === name) === undefined) {
      let new_active = [...active];

      if (new_active.length >= count) {
        new_active.splice(0, 1);
      }

      new_active.push(name);

      setActive(new_active);
    }
  };

  const handleContinue = (): void => {
    if (active.length === count) {
      const name =
        localStorage.getItem("step")?.replace("Choose", "") + "ExtraUnits";

      localStorage.setItem(name, active.join(" "));

      props.onNextStep();
    }
  };

  return (
    <React.Fragment>
      <div className={classes.root}>
        <Panel
          style="right"
          title={t("global.chooseUnits", {
            count: count,
          })}
        >
          <div className={classes.units}>
            {units.map((name: string, index: number) => (
              <img
                key={index}
                src={`images/${name}.jpg`}
                alt={name}
                className={classes.unit}
                data-active={
                  active.find((element) => element === name) !== undefined
                }
                onClick={() => addActive(name)}
              />
            ))}
          </div>
        </Panel>

        <Button onClick={() => handleContinue()} className={classes.continue}>
          {t("global.continue")}
        </Button>
      </div>
    </React.Fragment>
  );
}
