const path = require('path');
const projectDir = path.resolve(__dirname, '../');

module.exports = {
  output: `${projectDir}/build`,
  sourceStyles: `${projectDir}/app/stylesheets`,
  outputStyles: `${projectDir}/build/stylesheets`,
  outputJS: `${projectDir}/build/javascripts`,

  sourceJS: `${projectDir}/app/javascripts`,
  webpackConfig: `${projectDir}/webpack.config.js`,
  outputImages: `${projectDir}/build/images`,
  node_modules: `${projectDir}/node_modules`
};
