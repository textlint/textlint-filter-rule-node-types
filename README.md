# textlint-rule-ignore-node-types [![Build Status](https://travis-ci.org/textlint/textlint-rule-ignore-node-types.svg?branch=master)](https://travis-ci.org/textlint/textlint-rule-ignore-node-types)

[textlint](https://textlint.github.io/ "textlint") rule that ignore node's type if the type is reported.

## Story

You have used various [textlint rule](https://github.com/textlint/textlint/wiki/Collection-of-textlint-rule "textlint rule").
These work fine, but you want to ignore some reported error in your text.

FooRule also check the `BlockQuote` text, but you want to ignore the `BlockQuote` text.

`textlint-rule-ignore-node-types` rule which is **ignoring rule** resolve the issue.

## Installation

    npm install textlint-rule-ignore-node-types

## Usage

If you ignore `BlockQuote` node and define `"BlockQuote"` to `"nodeTypes"`.

`.textlintrc`

```json
{
    "rules": {
        "ignore-node-types": {
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
    "rules": {
        "ignore-node-types": {
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

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## License

MIT