module.exports = ({
  output: "export",
  distDir: "dist",
  pageExtensions: ["tsx"],
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.module.rules.push(
      ...[
        {
          test: /\.ya?ml$/,
          // The type: "javascript/auto" ensures that Webpack does not try to parse the YAML output as JSON or JavaScript, avoiding the error.
          type: "javascript/auto",
          use: "yaml-loader",
        },
        {
          test: /\.svg$/,
          use: "@svgr/webpack",
        },
      ]
    );
    return config;
  },
});
