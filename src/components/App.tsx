import { JssProvider, ThemeProvider } from "react-jss";
import React, { Suspense } from "react";

import FinalStep from "./FinalStep";
import { ITheme } from "themes/theme";
import Language from "./Language";
import Race from "./Race";
import STEPS from "utils/steps";
import Step from "./Step";
import { Themes } from "themes/themes";
import UnitChooser from "./UnitChooser";
import jssSetUp from "utils/jssSetUp";
import { useMediaQuery } from "beautiful-react-hooks";

export interface IAppProps {}

export default function App(props: IAppProps): JSX.Element {
  const [step, setStep] = React.useState<string>(
    localStorage.getItem("step") === null
      ? "language"
      : (localStorage.getItem("step") as string)
  );

  const prefers_dark = useMediaQuery("(prefers-color-scheme: dark)");
  const [theme, setTheme] = React.useState<ITheme>(
    localStorage.getItem("theme") === "light"
      ? Themes.light
      : prefers_dark
      ? Themes.dark
      : Themes.light
  );

  const changeTheme = (): void => {
    localStorage.setItem("theme", theme === Themes.dark ? "light" : "dark");

    setTheme(theme === Themes.dark ? Themes.light : Themes.dark);
  };

  const changeStep = (new_step: string): void => {
    localStorage.setItem("step", new_step);

    setStep(new_step);
  };

  const handleNextStep = (): void => {
    switch (step) {
      case "language":
        changeStep("race");
        break;
      case "race":
        changeStep("stepOne");
        break;
      case "stepOne":
        changeStep("stepTwo");

        break;
      case "stepTwo":
        changeStep("stepThree");

        break;
      case "stepThree":
        changeStep("stepFourChoose");

        break;
      case "stepFourChoose":
        changeStep("stepFour");

        break;
      case "stepFour":
        changeStep("stepFiveChoose");

        break;
      case "stepFiveChoose":
        changeStep("stepFive");

        break;
      case "stepFive":
        changeStep("stepSixChoose");

        break;
      case "stepSixChoose":
        changeStep("stepSix");

        break;
      case "stepSix":
        changeStep("stepSeven");

        break;
    }
  };

  let content = <React.Fragment></React.Fragment>;

  switch (step) {
    case "race":
      content = <Race onNextStep={handleNextStep} />;

      break;
    case "stepOne":
      content = (
        <Step
          name="stepOne.name"
          data={STEPS.one}
          onNextStep={handleNextStep}
        />
      );

      break;
    case "stepTwo":
      content = (
        <Step
          name="stepTwo.name"
          data={STEPS.two}
          onNextStep={handleNextStep}
        />
      );

      break;
    case "stepThree":
      content = (
        <Step
          name="stepThree.name"
          data={STEPS.three}
          onNextStep={handleNextStep}
        />
      );

      break;
    case "stepFourChoose":
      content = <UnitChooser data={STEPS.four} onNextStep={handleNextStep} />;

      break;
    case "stepFour":
      content = (
        <Step
          name="stepFour.name"
          data={STEPS.four}
          onNextStep={handleNextStep}
        />
      );

      break;
    case "stepFiveChoose":
      content = <UnitChooser data={STEPS.five} onNextStep={handleNextStep} />;

      break;
    case "stepFive":
      content = (
        <Step
          name="stepFive.name"
          data={STEPS.five}
          onNextStep={handleNextStep}
        />
      );

      break;
    case "stepSixChoose":
      content = <UnitChooser data={STEPS.six} onNextStep={handleNextStep} />;

      break;
    case "stepSix":
      content = (
        <Step
          name="stepSix.name"
          data={STEPS.six}
          onNextStep={handleNextStep}
        />
      );

      break;
    case "stepSeven":
      content = <FinalStep />;

      break;
    default:
      content = <Language onNextStep={handleNextStep} />;

      break;
  }

  return (
    <React.Fragment>
      <JssProvider registry={jssSetUp()}>
        <ThemeProvider theme={theme}>
          <Suspense fallback="loading">{content}</Suspense>
        </ThemeProvider>
      </JssProvider>
    </React.Fragment>
  );
}
