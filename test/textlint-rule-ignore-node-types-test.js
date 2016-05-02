// LICENSE : MIT
"use strict";
const TextLintCore = require("textlint").TextLintCore;
const TextLintNodeType = require("textlint").TextLintNodeType;
import ignoreRule from "../src/textlint-rule-ignore-node-types";
import reportRule from "../src/textlint-rule-report-node-types";
const assert = require("power-assert");
describe("textlint-rule-ignore-node-types", function () {
    context("when report type", function () {
        it("should messages includes the type message", function () {
            const textlint = new TextLintCore();
            textlint.setupRules({
                report: reportRule
            }, {
                report: {
                    nodeTypes: [TextLintNodeType.Str]
                }
            });
            return textlint.lintText("text").then(({messages}) => {
                assert.equal(messages.length, 1);
                assert.equal(messages[0].message, TextLintNodeType.Str);
            });
        });
    });
    context("when report and ignore type", function () {
        it("should messages is empty", function () {
            const textlint = new TextLintCore();
            textlint.setupRules({
                ignore: ignoreRule,
                report: reportRule
            }, {
                ignore: {
                    nodeTypes: [TextLintNodeType.Str]
                },
                report: {
                    nodeTypes: [TextLintNodeType.Str]
                }
            });
            return textlint.lintText("text").then(({messages}) => {
                assert.equal(messages.length, 0);
            });
        });
    });
    context("when report multiple nodes and ignore type", function () {
        it("should messages is empty", function () {
            const textlint = new TextLintCore();
            textlint.setupRules({
                ignore: ignoreRule,
                report1: reportRule,
                report2: reportRule
            }, {
                ignore: {
                    nodeTypes: [TextLintNodeType.Str]
                },
                report1: {
                    nodeTypes: [TextLintNodeType.Str]
                },
                report2: {
                    nodeTypes: [TextLintNodeType.Str]
                }
            });
            return textlint.lintText("text").then(({messages}) => {
                assert.equal(messages.length, 0);
            });
        });
    });
});