// next.config.js
const withImages = require("next-images");
const path = require("path");
module.exports = withImages({
  esmodule: true,
  exclude: path.resolve(__dirname, "assets/icons"),
  webpack(config, options) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [options.defaultLoaders.babel, "@svgr/webpack"],
    });
    config.module.rules.push({
      test: /\.s[ac]ss$/i,
      use: [
        "style-loader",
        "@teamsupercell/typings-for-css-modules-loader",
        {
          loader: "css-loader",
          options: {
            modules: true,
            localsConvention: "camelCase",
          },
        },
        "sass-loader",
      ],
    });
    return config;
  },
});
