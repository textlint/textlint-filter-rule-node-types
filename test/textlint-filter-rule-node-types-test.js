// LICENSE : MIT
"use strict";
import { TextLintCore } from "textlint";
import { ASTNodeTypes } from "@textlint/ast-node-types";
import filterRule from "../src/textlint-filter-rule-node-types";
import reportRule from "textlint-rule-report-node-types";
const assert = require("power-assert");
describe("textlint-filter-rule-node-types", function () {
    context("when report and ignore type", function () {
        it("should messages is empty", function () {
            const textlint = new TextLintCore();
            textlint.setupRules({
                report: reportRule
            }, {
                report: {
                    nodeTypes: [ASTNodeTypes.Str]
                }
            });
            textlint.setupFilterRules({
                ignore: filterRule
            }, {
                ignore: {
                    nodeTypes: [ASTNodeTypes.Str]
                }
            });
            return textlint.lintText("text").then(({messages}) => {
                assert.equal(messages.length, 0);
            });
        });
    });
    context("when fixer report and ignore type", function () {
        it("should messages is empty", function () {
            const textlint = new TextLintCore();
            textlint.setupRules({
                report: reportRule
            }, {
                report: {
                    nodeTypes: [ASTNodeTypes.Str]
                }
            });
            textlint.setupFilterRules({
                ignore: filterRule
            }, {
                ignore: {
                    nodeTypes: [ASTNodeTypes.Str]
                }
            });
            return textlint.fixText("text").then(({messages}) => {
                assert.equal(messages.length, 0);
            });
        });
    });
    context("when report multiple nodes and ignore type", function () {
        it("should messages is empty", function () {
            const textlint = new TextLintCore();
            textlint.setupRules({
                report1: reportRule,
                report2: reportRule
            }, {
                report1: {
                    nodeTypes: [ASTNodeTypes.Str]
                },
                report2: {
                    nodeTypes: [ASTNodeTypes.Str]
                }
            });
            textlint.setupFilterRules({
                ignore: filterRule
            }, {
                ignore: {
                    nodeTypes: [ASTNodeTypes.Str]
                }
            });
            return textlint.lintText("text").then(({messages}) => {
                assert.equal(messages.length, 0);
            });
        });
    });
    context("when report multiple nodes and ignore type with complex nodeTypes", function () {
        it("should messages is only one message", function () {
            const textlint = new TextLintCore();
            textlint.setupRules({
                report1: reportRule,
                report2: reportRule
            }, {
                report1: {
                    nodeTypes: [ASTNodeTypes.Str]
                },
                report2: {
                    nodeTypes: [ASTNodeTypes.Str]
                }
            });
            textlint.setupFilterRules({
                ignore: filterRule
            }, {
                ignore: {
                    nodeTypes: [
                        {
                            ruleId: "report2",
                            types: [ASTNodeTypes.Str]
                        }
                    ]
                }
            });
            return textlint.lintText("text").then(({messages}) => {
                assert.equal(messages.length, 1);
                assert.equal(messages[0].ruleId, "report1");
            });
        });
    });
});