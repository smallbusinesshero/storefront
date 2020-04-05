module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: require.resolve("babel-loader"),
    options: {
      presets: [require.resolve("babel-preset-react-app")],
    },
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

  config.resolve.extensions.push(".ts", ".tsx");
  return config;
};
