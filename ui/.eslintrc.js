module.exports = {
  root: false,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  "globals": {
    "DEV": true,
    "ISWIDGET": true,
  },
  rules: {
    'arrow-parens': 'off',
    'lines-between-class-members': 'off',
    'class-methods-use-this': 'off',
    'import/no-cycle': 'off',
    'import/no-unresolved': 'off',
    'import/order': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off',
    'no-multiple-empty-lines': 'off',
    'linebreak-style': 'off',
    'max-len': 'off',
    'no-console': 'off',
    'no-debugger': 'off',
    'no-extend-native': 'off',
    'no-underscore-dangle': 'off',
    'no-use-before-define': 'off',
    'no-param-reassign': 'off',
    'prefer-promise-reject-errors': 'off',
    'quotes': 'off',
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
