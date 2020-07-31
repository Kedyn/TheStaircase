import React from "react";
import useStyles from "./Header.styles";

export interface IHeaderProps {}

export default function Header(props: IHeaderProps): JSX.Element {
  const classes = useStyles();

  return (
    <React.Fragment>
      <div className={classes.root}>
        <h1 className={classes.title}>
          <span className={classes.special}>T</span>he
          <span className={classes.special}>S</span>taircase
        </h1>
      </div>
    </React.Fragment>
  );
}
