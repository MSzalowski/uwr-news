module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          store: './src/store',
          assets: './src/assets',
          components: './src/components',
          screens: './src/screens',
          utils: './src/utils',
        },
      },
    ],
  ],
}
