// LICENSE : MIT
"use strict";
const assert = require("assert");
const defaultOptions = {
    /**
     * @type {string[]} array of node type string
     */
    nodeTypes: []
};
const message = `You forgot setting to options like { "nodeTypes" : ["Str", { "ruleId": "no-todo", "types": ["BlockQuote"] }] }`;
module.exports = function (context, options = defaultOptions) {
    const {shouldIgnore} = context;
    const nodeTypes = options.nodeTypes || defaultOptions.nodeTypes;
    assert(Array.isArray(nodeTypes) && nodeTypes.length > 0, message);
    const rule = {};
    nodeTypes.forEach(typeEntry => {
        let types, ruleId;
        if (typeof typeEntry === "string") {
            types = [typeEntry];
            ruleId = "*";
        } else if (typeof typeEntry === "object") {
            types = typeEntry.types;
            ruleId = typeEntry.ruleId;
            assert(Array.isArray(types) && types.length > 0, message);
            assert(typeof ruleId === "string", message);
        } else {
            assert.fail(message);
        }
        types.forEach(type => {
            rule[type] = (node) => {
                shouldIgnore(node.range, {
                    ruleId
                });
            };
        });
    });
    return rule;
};