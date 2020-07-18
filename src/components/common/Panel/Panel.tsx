import React from "react";
import useStyles from "./Panel.styles";

export interface IPanelProps {
  style?: "left" | "mid" | "right";
  title: string;
  className?: string;
}

export default function Panel(
  props: React.PropsWithChildren<IPanelProps>
): JSX.Element {
  const classes = useStyles();

  return (
    <React.Fragment>
      <div className={`${classes.root} ${props.className}`}>
        <div className={classes.subtitle}>{props.title}</div>

        {props.children}
      </div>
    </React.Fragment>
  );
}
