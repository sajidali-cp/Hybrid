/**
 * This override was added to overcome the bug in Create-React-App (CRA).
 * As .mjs files were not supported. .mjs files are present in framer-motion package.
 * - two packages are used in this override: customize-cra and react-app-rewired
 * - start and build scripts in package.json file were also edited from
 *   "react-script start" and "react-script build" to
 *   "react-app-rewired start" and "react-app-rewired build"
 *   respectively.
 */
const { override } = require("customize-cra");

const supportMjs = () => (webpackConfig) => {
  webpackConfig.module.rules.push({
    test: /\.mjs$/,
    include: /node_modules/,
    type: "javascript/auto",
  });
  return webpackConfig;
};

module.exports = override(supportMjs());
