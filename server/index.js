require("ignore-styles");

// eslint-disable-next-line no-undef
require("@babel/register")({
  ignore: [/(node_module)/],
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          esmodules: true,
        },
      },
    ],
    "@babel/preset-react",
  ],
});

require("./server");
