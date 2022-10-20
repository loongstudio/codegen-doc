const head = require('./config/head.js');
const plugins = require('./config/plugins.js');
const themeConfig = require('./config/themeConfig.js');

module.exports = {
  theme: "vdoing",
  title: "Codegen",
  description: 'Codegen',
  base: "/codegen/doc/",
  markdown: {
    lineNumbers: true
  },
  head,
  themeConfig,
  plugins
}
