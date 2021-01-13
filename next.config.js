const withPreact = require("next-plugin-preact");

require("fs").copyFileSync(
  "./node_modules/preact/compat/jsx-runtime.js",
  "./node_modules/preact/compat/jsx-dev-runtime.js"
);

module.exports = withPreact({
  reactStrictMode: true,
});
