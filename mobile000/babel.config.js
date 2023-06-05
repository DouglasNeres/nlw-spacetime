module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo', '@babel/preset-env', '@babel/preset-react'],
    plugins: [
      'nativewind/babel',
      require.resolve('expo-router/babel'),
      '@babel/plugin-proposal-export-namespace-from',
    ],
  }
}
