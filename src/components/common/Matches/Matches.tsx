import { Trans, useTranslation } from "react-i18next";

import Panel from "components/common/Panel";
import React from "react";
import useStyles from "./Matches.styles";

export interface IMatchesProps {
  name: string;
}

export default function Matches(props: IMatchesProps): JSX.Element {
  const { t } = useTranslation();
  const classes = useStyles();
  const [active, setActive] = React.useState("none");
  const [matches, setMatches] = React.useState(
    localStorage.getItem(localStorage.getItem("step") + "Matches")
  );
  const leagues = [
    "bronze",
    "silver",
    "gold",
    "platinum",
    "diamond",
    "master",
    "grandmaster",
  ];

  React.useEffect(() => {
    console.log(name);
    setMatches(localStorage.getItem(localStorage.getItem("step") + "Matches"));
  }, [props.name]);

  const addMatch = () => {
    if (active !== "none") {
      const name = localStorage.getItem("step") + "Matches";

      let new_matches: string = "";

      if (localStorage.getItem(name) !== null) {
        new_matches = `${localStorage.getItem(name)} ${active}`;
      } else {
        new_matches = active;
      }

      localStorage.setItem(name, new_matches);

      setActive("none");
      setMatches(new_matches);
    }
  };

  const reset = () => {
    localStorage.setItem(localStorage.getItem("step") + "Matches", "");
    setMatches("");
  };

  return (
    <React.Fragment>
      <div className={classes.root}>
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
            {matches?.split(" ").map((league, index) => (
              <img
                key={index}
                src={`images/${league}.png`}
                alt={league}
                className={classes.league}
              />
            ))}
          </div>

          <div className={classes.resetWrapper}>
            <button
              onClick={() => reset()}
              className={`${classes.button} ${classes.reset}`}
            >
              {t("global.reset")}
            </button>
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
    </React.Fragment>
  );
}
