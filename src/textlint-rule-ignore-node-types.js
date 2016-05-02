// LICENSE : MIT
"use strict";
const assert = require("assert");
const defaultOptions = {
    /**
     * @type {string[]}
     */
    nodeTypes: []
};
module.exports = function (context, options = defaultOptions) {
    const {shouldIgnore} = context;
    const nodeTypes = options.nodeTypes || defaultOptions.nodeTypes;
    assert(Array.isArray(nodeTypes) && nodeTypes.length > 0, `You forgot setting to options like { "nodeTypes" : ["Str"] }`);
    const rule = {};
    nodeTypes.forEach(type => {
        rule[type] = (node) => {
            shouldIgnore(node);
        }
    });
    return rule;
};