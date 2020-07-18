export interface ITheme {
  primary: string;
  background: string;
  backgroundBox: string;
  activeBackgroundBox: string;
  borderColor: string;
  border: string;
  activeBorderColor: string;
  activeBorder: string;
}

export default class DefaultTheme implements ITheme {
  public primary: string;
  public background: string;
  public backgroundBox: string;
  public activeBackgroundBox: string;
  public borderColor: string;
  public border: string;
  public activeBorderColor: string;
  public activeBorder: string;

  public constructor() {
    this.primary = "rgba(255, 255, 255, 0.9)";
    this.background = "rgb(3, 8, 13)";
    this.backgroundBox = "rgba(255, 255, 255, 0.1)";
    this.activeBackgroundBox = "rgba(255, 255, 255, 0.2)";
    this.borderColor = "rgba(255, 255, 255, 0.3)";
    this.border = `1px solid ${this.borderColor}`;
    this.activeBorderColor = "rgba(255, 255, 255, 0.5)";
    this.activeBorder = `1px solid ${this.activeBorderColor}`;
  }
}
