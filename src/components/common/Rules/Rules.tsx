import Panel from "../Panel";
import React from "react";
import useStyles from "./Rules.styles";
import { useTranslation } from "react-i18next";

export interface IRulesProps {
  rules: Array<string>;
}

export default function Rules(props: IRulesProps): JSX.Element {
  const { t } = useTranslation();
  const classes = useStyles();

  return (
    <React.Fragment>
      <Panel style="left" title={t("global.rules")} className={classes.root}>
        {props.rules.map((rule: string, index: number) => (
          <div key={index} className={classes.rule}>
            &rarr; {t(rule)}
          </div>
        ))}
      </Panel>
    </React.Fragment>
  );
}
