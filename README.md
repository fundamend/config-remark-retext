# config-remark-retext

_config-remark-retext_ is a configuration preset for [remark-retext] used by [config-remark] and the [fundamend.dev] ecosystem.

## Installation

Use your favorite Node.js package manager, for example [npm], like so:

    npm install --save-dev @fundamend/config-remark-retext

... or [yarn], like so:

    yarn add --dev @fundamend/config-remark-retext

## Usage

In your [.remarkrc.js], import _config-remark-retext_ and add it to the plugins array, like so:

```js
const retext = require('@fundamend/config-remark-retext');

const plugins = [retext];
const settings = {};

module.exports = {
	plugins: plugins,
	settings: settings
};
```

## License

[MIT]

[fundamend.dev]: https://fundamend.dev
[mit]: https://choosealicense.com/licenses/mit/
[npm]: https://www.npmjs.com/
[config-remark]: https://github.com/fundamend/config-remark
[remark-retext]: https://github.com/remarkjs/remark-retext
[.remarkrc.js]: https://github.com/unifiedjs/unified-engine/blob/master/doc/configure.md
[yarn]: https://yarnpkg.com/
