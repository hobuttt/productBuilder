const path = require('path');

module.exports = {
  outputDir: 'dist/' + process.env.IS_USER,
  chainWebpack: config => {
    if (process.env.IS_USER === 'admin') {
      config
        .plugin('html')
        .tap(args => {
          args[0].template = './src/apps/admin/index.html';
          return args
        });
      config
        .entry('app')
        .clear()
        .add('./src/apps/admin/main.js')
        .end()
    }
    if (process.env.IS_USER === 'user') {
      config
        .plugin('html')
        .tap(args => {
          args[0].template = './src/apps/user/index.html';
          return args
        });
      config
        .entry('app')
        .clear()
        .add('./src/apps/user/main.js')
        .end()
    }
    config.resolve.alias.set('@admin', path.resolve('src/apps/admin'));
    config.resolve.alias.set('@user', path.resolve('src/apps/user'));
    config.resolve.alias.set('@common', path.resolve('src/common'))
  }
};
