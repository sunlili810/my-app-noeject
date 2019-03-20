const { injectBabelPlugin } = require('react-app-rewired');
const rewireLess = require('react-app-rewire-less');
// const path = require('path');

module.exports = function override(config, env) {
  config = injectBabelPlugin(
    ['import', { libraryName: 'antd', libraryDirectory: 'es', style: true }], // change importing css to less
    config,
  );
  config = rewireLess.withLoaderOptions({
    modifyVars: { '@primary-color': '#1DA57A' },
    javascriptEnabled: true
  })(config, env);

  config = injectBabelPlugin(
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    config,
  );
  //
  // const babelLoader = getBabelLoader(config.module.rules);
  // const pwd = path.resolve();
  // babelLoader.include = [path.normalize(`${pwd}/src`)];
  // // use babelrc
  // babelLoader.options.babelrc = true;

  return config;
};
