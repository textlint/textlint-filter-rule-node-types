# textlint-filter-rule-node-types [![Build Status](https://travis-ci.org/textlint/textlint-filter-rule-node-types.svg?branch=master)](https://travis-ci.org/textlint/textlint-filter-rule-node-types)

[![Greenkeeper badge](https://badges.greenkeeper.io/textlint/textlint-filter-rule-node-types.svg)](https://greenkeeper.io/)

[textlint](https://textlint.github.io/ "textlint") [filter rule](https://github.com/textlint/textlint/blob/master/docs/filter-rule.md) that filter error about specified node type.

## Story

You have used various [textlint rule](https://github.com/textlint/textlint/wiki/Collection-of-textlint-rule "textlint rule").
These work fine, but you want to ignore some reported error in your text.

FooRule also check the `BlockQuote` text, but you want to ignore the `BlockQuote` text.

`textlint-filter-rule-node-types` rule resolve the issue.

This is [filter rule](https://github.com/textlint/textlint/blob/master/docs/filter-rule.md "Filter rule") of textlint.

## Installation

    npm install textlint-filter-rule-node-types

Dependencies

- textlint >=[6.9.0](https://github.com/textlint/textlint/releases/tag/6.9.0 "6.9.0")


## Usage

If you want to ignore `BlockQuote` node, define `"BlockQuote"` to `"nodeTypes"`.

`.textlintrc`

```json
{
    "filters": {
        "node-types": {
            "nodeTypes": ["BlockQuote"]
        }
    }
}
```

OR

`.textlintrc` as JavaScript config file.

```js
const TextLintNodeType = require("textlint").TextLintNodeType;
module.exports = {
    "filters": {
        "node-types": {
            "nodeTypes": [TextLintNodeType.BlockQuote]
        }
    }
}
```

If you want to know all types of TxtNode, please see the document.

- [github.com/textlint/textlint/blob/master/docs/txtnode.md#type](https://github.com/textlint/textlint/blob/master/docs/txtnode.md#type)

## Tests

    npm test

## Knowledge

ESLint have a feature like Disabling comment.

- [Disabling Rules with Inline Comments](http://eslint.org/docs/user-guide/configuring#disabling-rules-with-inline-comments "Disabling Rules with Inline Comments")

textlint not define file syntax. For example, Markdown format have not comment syntax(have only html comment).

We can resolve the issue by the ignoring rule instead of disabling comment.

Of course, _disabling comment_ could be implemented as _ignoring rule_. 

## Related

Opposite <-> [textlint-rule-report-node-types](https://github.com/textlint/textlint-rule-report-node-types "textlint-rule-report-node-types").

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## License

MIT
