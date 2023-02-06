const path = require('path');

module.exports = {
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@api': path.resolve(__dirname, 'api'),
      '@form': path.resolve(__dirname, 'form'),
      '@utils': path.resolve(__dirname, 'utils'),
      '@template': path.resolve(__dirname, 'template'),
      '@models': path.resolve(__dirname, 'models'),
    },
  },
};
