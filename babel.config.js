module.exports = {
  presets: [
    ['module:react-native-builder-bob/babel-preset', { modules: 'commonjs' }],
  ],
  plugins: [
    'react-native-reanimated/plugin',
    // '@babel/plugin-proposal-optional-chaining',
    // '@babel/plugin-proposal-nullish-coalescing-operator',
  ],
};
