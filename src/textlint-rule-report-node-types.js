// LICENSE : MIT
"use strict";
const assert = require("assert");
const defaultOptions = {
    /**
     * @type {string[]}
     */
    nodeTypes: []
};
export default function (context, options = defaultOptions) {
    const {report, RuleError} = context;
    const nodeTypes = options.nodeTypes || defaultOptions.nodeTypes;
    assert(Array.isArray(nodeTypes) && nodeTypes.length > 0, `You forgot setting to options like { "nodeTypes" : ["Str"] }`);
    const rule = {};
    nodeTypes.forEach(type => {
        rule[type] = (node) => {
            report(node, new RuleError(node.type));
        }
    });
    return rule;
}