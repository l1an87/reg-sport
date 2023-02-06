const publicPath = '/';
const devServer = {
  port: 3000,
  disableHostCheck: true
};

module.exports = {
  publicPath,
  devServer,
  transpileDependencies: [
    'vuetify',
  ],
};
