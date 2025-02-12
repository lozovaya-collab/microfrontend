const { defineConfig } = require('@vue/cli-service')
const ModuleFederationPlugin = require("webpack").container.ModuleFederationPlugin;
const deps = require('./package.json').dependencies

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    // compress: true,
    port: 8080,
    // hot: true,
  },
  configureWebpack: {
    plugins: [
      new ModuleFederationPlugin({
        name: "host",
        filename: "remoteEntry.js",
        remotes: {
          AppWrapper: 'AppWrapper@http://localhost:3333/nova/remoteEntry.js'
        },
        shared: {
          ...deps,
          vue: {
            singleton: true,
            eager: true,
            requiredVersion: deps.vue
          },
          ['vue-router']: {
            singleton: true,
            eager: true,
            requiredVersion: deps['vue-router']
          }
        }
      }),
    ],
  },
})
