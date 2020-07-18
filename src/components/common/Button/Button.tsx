import React from "react";
import useStyles from "./Button.styles";

export interface IButtonProps {
  onClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>): void;
  style?: "left" | "mid" | "right";
  padding?: string;
  className?: string;
}

export default function Button(
  props: React.PropsWithChildren<IButtonProps>
): JSX.Element {
  const classes = useStyles(props);

  return (
    <React.Fragment>
      <div
        className={`${classes.root} ${props.className}`}
        onClick={props.onClick}
      >
        {props.children}
      </div>
    </React.Fragment>
  );
}
