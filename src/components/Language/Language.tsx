import Button from "components/common/Button";
import React from "react";
import i18next from "i18next";
import useStyles from "./Language.styles";

export interface ILanguageProps {
  onNextStep(): void;
}

export default function Language(props: ILanguageProps): JSX.Element {
  const classes = useStyles();

  return (
    <React.Fragment>
      <div className={classes.root}>
        <h1 className={classes.title}>
          <span className={classes.special}>T</span>he
          <span className={classes.special}>S</span>taircase
          <br />
          <span className={classes.special}>L</span>a
          <span className={classes.special}>E</span>scalera
        </h1>
        <div className={classes.wrapper}>
          <Button
            onClick={() => {
              i18next.changeLanguage("en-US");
              props.onNextStep();
            }}
            style="left"
          >
            English
          </Button>
          <Button
            onClick={() => {
              i18next.changeLanguage("es-MX");
              props.onNextStep();
            }}
            style="right"
          >
            Español
          </Button>
        </div>
      </div>
    </React.Fragment>
  );
}
