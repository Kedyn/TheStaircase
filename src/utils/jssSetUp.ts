import { SheetsRegistry, jss } from "react-jss";

import preset from "jss-preset-default";

export default function jssSetUp(): SheetsRegistry {
  jss.setup(preset());

  const sheets_registry = new SheetsRegistry();

  const global_style_sheet = jss
    .createStyleSheet({
      "@global": {
        "@font-face": [
          {
            fontFamily: "Starcraft",
            src: `url("fonts/Starcraft Normal.ttf") format("truetype")`,
          },
          {
            fontFamily: "ShareTech",
            src: `url("fonts/ShareTech-Regular.ttf") format("truetype")`,
          },
        ],
        html: {
          boxSizing: "border-box",
        },
        "*, *:before, *:after": {
          boxSizing: "inherit",
        },
        body: {
          margin: 0,
          background: `linear-gradient( rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25) ), url("images/bg.jpg") no-repeat center center fixed`,
          backgroundSize: "cover",
          color: "rgba(255, 255, 255, 0.7)",
          fontFamily: "ShareTech, Arial",
          fontSize: "20px",
        },
        "#root": {
          minWidth: "100vw",
          minHeight: "100vh",
          maxWidth: "100vw",
          maxHeight: "100vh",
          display: "flex",
          flexDirection: "column",
        },
        a: {
          textDecorations: "none",
          color: "rgba(255, 255, 255, 1)",

          "&:hover": {
            color: "rgba(255, 255, 255, 0.5)",
          },
        },
      },
    })
    .attach();

  sheets_registry.add(global_style_sheet);

  return sheets_registry;
}
