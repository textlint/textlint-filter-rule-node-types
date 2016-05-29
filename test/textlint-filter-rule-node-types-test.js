// LICENSE : MIT
"use strict";
const TextLintCore = require("textlint").TextLintCore;
const TextLintNodeType = require("textlint").TextLintNodeType;
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
                    nodeTypes: [TextLintNodeType.Str]
                }
            });
            textlint.setupFilterRules({
                ignore: filterRule
            }, {
                ignore: {
                    nodeTypes: [TextLintNodeType.Str]
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
                    nodeTypes: [TextLintNodeType.Str]
                }
            });
            textlint.setupFilterRules({
                ignore: filterRule
            }, {
                ignore: {
                    nodeTypes: [TextLintNodeType.Str]
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
                    nodeTypes: [TextLintNodeType.Str]
                },
                report2: {
                    nodeTypes: [TextLintNodeType.Str]
                }
            });
            textlint.setupFilterRules({
                ignore: filterRule
            }, {
                ignore: {
                    nodeTypes: [TextLintNodeType.Str]
                }
            });
            return textlint.lintText("text").then(({messages}) => {
                assert.equal(messages.length, 0);
            });
        });
    });
});