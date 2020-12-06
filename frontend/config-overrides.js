const path = require('path');
const {
  override,
  babelInclude,
  addBabelPreset,
  addExternalBabelPlugin,
} = require('customize-cra');

module.exports = override(
  babelInclude([
    path.resolve('src'),
    path.resolve('node_modules/react-router-dom'),
  ]),
  addBabelPreset("@babel/preset-react"),
  addExternalBabelPlugin('@babel/plugin-proposal-class-properties'),
)