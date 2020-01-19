module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/strandaprologdashboard/'
    : '/',
  lintOnSave: false,
  runtimeCompiler: true,
  configureWebpack: {
    //Necessary to run npm link https://webpack.js.org/configuration/resolve/#resolve-symlinks
    resolve: {
       symlinks: false
    }
  }
}
