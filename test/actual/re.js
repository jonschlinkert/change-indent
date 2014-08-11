module.exports = {
  blocks: [{
      num: 0,
      lang: 'bash',
      code: 'npm i engine-cache --save'
    },
    {
      num: 1,
      lang: 'js',
      code: 'var engines = require(\'engine-cache\');'
    },
    {
      num: 2,
      lang: 'javascript',
      code: 'var engines = require(\'engine-cache\');'
    },
    {
      num: 3,
      lang: 'js',
      code: 'var Engines = require(\'engine-cache\')\nvar engines = new Engines()'
    },
    {
      num: 4,
      lang: 'js',
      code: 'var consolidate = require(\'consolidate\')\nengines.register(\'hbs\', consolidate.handlebars)'
    },
    {
      num: 5,
      lang: 'js',
      code: 'engines.load(require(\'consolidate\'))'
    },
    {
      num: 6,
      lang: 'js',
      code: 'var consolidate = require(\'consolidate\')\nengine.set(\'hbs\', consolidate.handlebars)\nengine.get(\'hbs\')\n// => {render: [function], renderFile: [function]}'
    },
    {
      num: 7,
      lang: 'js',
      code: 'engines.clear()'
    },
    {
      num: 8,
      lang: 'js',
      code: 'engines.option(\'a\', true)\nengines.option(\'a\')\n// => true'
    },
    {
      num: 9,
      lang: 'js',
      code: 'engines.extend({a: \'b\'})\nengines.option(\'a\')\n// => \'b\''
    },
    {
      num: 10,
      lang: '',
      code: 'npm i engine-cache --save\n'
    },
    {
      num: 11,
      lang: '',
      code: 'var engines = require(\'engine-cache\');\n'
    },
    {
      num: 12,
      lang: '',
      code: 'var engines = require(\'engine-cache\');\n'
    },
    {
      num: 13,
      lang: '',
      code: 'var Engines = require(\'engine-cache\')\nvar engines = new Engines()\n'
    },
    {
      num: 14,
      lang: '',
      code: 'var consolidate = require(\'consolidate\')\nengines.register(\'hbs\', consolidate.handlebars)\n'
    },
    {
      num: 15,
      lang: '',
      code: 'engines.load(require(\'consolidate\'))\n'
    },
    {
      num: 16,
      lang: '',
      code: 'var consolidate = require(\'consolidate\')\nengine.set(\'hbs\', consolidate.handlebars)\nengine.get(\'hbs\')\n// => {render: [function], renderFile: [function]}\n'
    },
    {
      num: 17,
      lang: '',
      code: 'engines.clear()\n'
    },
    {
      num: 18,
      lang: '',
      code: 'engines.option(\'a\', true)\nengines.option(\'a\')\n// => true\n'
    },
    {
      num: 19,
      lang: '',
      code: 'engines.extend({a: \'b\'})\nengines.option(\'a\')\n// => \'b\'\n'
    }],
  context: {
    code_block_0: '```bash\nnpm i engine-cache --save\n```',
    code_block_1: '```js\nvar engines = require(\'engine-cache\');\n```',
    code_block_2: '```javascript\nvar engines = require(\'engine-cache\');\n```',
    code_block_3: '```js\nvar Engines = require(\'engine-cache\')\nvar engines = new Engines()\n```',
    code_block_4: '```js\nvar consolidate = require(\'consolidate\')\nengines.register(\'hbs\', consolidate.handlebars)\n```',
    code_block_5: '```js\nengines.load(require(\'consolidate\'))\n```',
    code_block_6: '```js\nvar consolidate = require(\'consolidate\')\nengine.set(\'hbs\', consolidate.handlebars)\nengine.get(\'hbs\')\n// => {render: [function], renderFile: [function]}\n```',
    code_block_7: '```js\nengines.clear()\n```',
    code_block_8: '```js\nengines.option(\'a\', true)\nengines.option(\'a\')\n// => true\n```',
    code_block_9: '```js\nengines.extend({a: \'b\'})\nengines.option(\'a\')\n// => \'b\'\n```',
    code_block_10: '```\nnpm i engine-cache --save\n\n```',
    code_block_11: '```\nvar engines = require(\'engine-cache\');\n\n```',
    code_block_12: '```\nvar engines = require(\'engine-cache\');\n\n```',
    code_block_13: '```\nvar Engines = require(\'engine-cache\')\nvar engines = new Engines()\n\n```',
    code_block_14: '```\nvar consolidate = require(\'consolidate\')\nengines.register(\'hbs\', consolidate.handlebars)\n\n```',
    code_block_15: '```\nengines.load(require(\'consolidate\'))\n\n```',
    code_block_16: '```\nvar consolidate = require(\'consolidate\')\nengine.set(\'hbs\', consolidate.handlebars)\nengine.get(\'hbs\')\n// => {render: [function], renderFile: [function]}\n\n```',
    code_block_17: '```\nengines.clear()\n\n```',
    code_block_18: '```\nengines.option(\'a\', true)\nengines.option(\'a\')\n// => true\n\n```',
    code_block_19: '```\nengines.extend({a: \'b\'})\nengines.option(\'a\')\n// => \'b\'\n\n```'
  },
  content: ['# engine-cache [![NPM version](https://badge.fury.io/js/engine-cache.png)](http://badge.fury.io/js/engine-cache)\n\n> express.js inspired template-engine manager.\n\n## Install\n#### Install with [npm](npmjs.org)\n\n<%= code_block_0 %>## Usage\n\n<%= code_block_1 %>Random code block\n\n<%= code_block_2 %>## API\n### engines\n\nCreate a new instance of `Engines`, optionally passing the default `options` to use.\n\n* `options` **{Object}**: Default options to use.\n\n**Example:**\n\n<%= code_block_3 %>### .register\n\nRegister the given view engine callback `fn` as `ext`.\n\n* `ext` **{String}**\n* `fn` **{Function|Object}**: or `options`\n* `options` **{Object}**\n* returns **{engines}**: to enable chaining.\n\n<%= code_block_4 %>### .load\n\nLoad an object of engines onto the `cache`. Mostly useful for testing, but exposed as a public method.\n\n* `obj` **{Object}**: Engines to load.\n* returns **{engines}**: to enable chaining.\n\n<%= code_block_5 %>### .get\n\nReturn the engine stored by `ext`. If no `ext` is passed, the entire cache is returned.\n\n* `ext` **{String}**: The engine to get.\n* returns **{Object}**: The specified engine.\n\n<%= code_block_6 %>### .clear\n\nRemove `ext` from the cache, or if no value is specified the entire cache is reset.\n\n\n**Example:**\n\n<%= code_block_7 %>### .option\n\nSet or get an option.\n\n* `key` **{String}**\n* `value` **{*}**\n* returns **{engines}**: to enable chaining.\n\n<%= code_block_8 %>### .extend\n\nExtend the options with the given `obj`.\n\n* `obj` **{Object}**\n* returns **{engines}**: to enable chaining.\n\n<%= code_block_9 %>## Author\n\n**Jon Schlinkert**\n\n+ [github/jonschlinkert](https://github.com/jonschlinkert)\n+ [twitter/jonschlinkert](http://twitter.com/jonschlinkert)\n\n## License\nCopyright (c) 2014 Jon Schlinkert, contributors.\nReleased under the MIT license\n\n***\n\n_This file was generated by [verb-cli](https://github.com/assemble/verb-cli) on August 10, 2014._\n\n\n# engine-cache [![NPM version](https://badge.fury.io/js/engine-cache.png)](http://badge.fury.io/js/engine-cache)\n\n> express.js inspired template-engine manager.\n\n## Install\n#### Install with [npm](npmjs.org)\n<%= code_block_10 %>## Usage\n<%= code_block_11 %>Random code block\n<%= code_block_12 %>## API\n### engines\n\nCreate a new instance of `Engines`, optionally passing the default `options` to use.\n\n* `options` **{Object}**: Default options to use.\n\n**Example:**\n<%= code_block_13 %>### .register\n\nRegister the given view engine callback `fn` as `ext`.\n\n* `ext` **{String}**\n* `fn` **{Function|Object}**: or `options`\n* `options` **{Object}**\n* returns **{engines}**: to enable chaining.\n\n<%= code_block_14 %>### .load\n\nLoad an object of engines onto the `cache`. Mostly useful for testing, but exposed as a public method.\n\n* `obj` **{Object}**: Engines to load.\n* returns **{engines}**: to enable chaining.\n<%= code_block_15 %>### .get\n\nReturn the engine stored by `ext`. If no `ext` is passed, the entire cache is returned.\n\n* `ext` **{String}**: The engine to get.\n* returns **{Object}**: The specified engine.\n<%= code_block_16 %>### .clear\n\nRemove `ext` from the cache, or if no value is specified the entire cache is reset.\n\n\n**Example:**\n<%= code_block_17 %>### .option\n\nSet or get an option.\n\n* `key` **{String}**\n* `value` **{*}**\n* returns **{engines}**: to enable chaining.\n<%= code_block_18 %>### .extend\n\nExtend the options with the given `obj`.\n\n* `obj` **{Object}**\n* returns **{engines}**: to enable chaining.\n<%= code_block_19 %>## Author\n\n**Jon Schlinkert**\n\n+ [github/jonschlinkert](https://github.com/jonschlinkert)\n+ [twitter/jonschlinkert](http://twitter.com/jonschlinkert)\n\n## License\nCopyright (c) 2014 Jon Schlinkert, contributors.\nReleased under the MIT license\n\n***\n\n_This file was generated by [verb-cli](https://github.com/assemble/verb-cli) on August 10, 2014._']
};