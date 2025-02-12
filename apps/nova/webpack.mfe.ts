const { ModuleFederationPlugin } = require('webpack').container

const deps = require('./package.json').dependencies

module.exports = () => {
  return new ModuleFederationPlugin({
    name: 'AppWrapper',
    filename: "remoteEntry.js",
    exposes: {
      './AppWrapper': './src/app/App.tsx',
    },
    shared: {
      ...deps,
      react: { singleton: true, eager: true, requiredVersion: deps.react },
      'react-dom': {
        singleton: true,
        eager: true,
        requiredVersion: deps['react-dom'],
      },
      'react-router-dom': {
        singleton: true,
        eager: true,
        requiredVersion: deps['react-router-dom'],
      },
    },
  })
}