const path = require("path");
module.exports = {
  chainWebpack: config => {
    config.resolve.alias
      .set("@", path.resolve(__dirname, "./src"))
      .set("components", path.resolve(__dirname, "./src/components"))
      .set("viewComponents", path.resolve(__dirname, "./src/viewComponents"));
    config.module.rules.delete("svg");
    config.module
      .rule("svg-smart")
      .test(/\.svg$/)
      .include.add(path.resolve(__dirname, "./src/assets/icons"))
      .end()
      .use("svg-sprite-loader")
      .loader("svg-sprite-loader")
      .options({
        symbolId: "icon-[name]"
      });
    config.module.rule("file").uses.clear();
    config.module
      .rule("file")
      .test(/\.svg$/)
      .exclude.add(path.resolve(__dirname, "./src/assets/icons"))
      .end()
      .use("file-loader")
      .loader("file-loader");
  },
  pluginOptions: {
    svgSprite: {
      /*
       * The directory containing your SVG files.
       */
      dir: "src/assets/icons",
      /*
       * The reqex that will be used for the Webpack rule.
       */
      test: /\.(svg)(\?.*)?$/,
      /*
       * @see https://github.com/kisenka/svg-sprite-loader#configuration
       */
      loaderOptions: {
        extract: true,
        spriteFilename: "img/icons.[hash:8].svg" // or 'img/icons.svg' if filenameHashing == false
      },
      /*
       * @see https://github.com/kisenka/svg-sprite-loader#configuration
       */
      pluginOptions: {
        plainSprite: true
      }
    }
  }
};
