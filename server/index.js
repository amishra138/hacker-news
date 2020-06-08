import "ignore-styles";

// eslint-disable-next-line no-undef
require("@babel/register")({
  ignore: [/(node_module)/],
  presets: ["@babel/preset-env", "@babel/preset-react"],
});

import "./server";
