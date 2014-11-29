// Original http://qiita.com/kaz2ngt/items/dabbfa2d20a328722ca2
// LICENSE : MIT
"use strict";

var byline = require('byline');
/**
 * Constructor
 * @param stream input stream
 * @constructor
 */
function XReadLine(stream) {
    this.list = [];
    this.rl = byline.createStream(stream);
}
/**
 * @param {Number} unit get line by `unit`
 * @param {Function} processCallback callback - when get each line.
 * @param {Function} completeCallback callback - when complete all line.
 */
XReadLine.prototype.forEach = function (unit, processCallback, completeCallback) {
    var that = this;
    that.rl.on('data', function (line) {
        that.list.push(line);
        if (that.list.length >= unit) {
            processCallback(that.list);
            that.list = [];
        }
    });
    that.rl.on('end', function () {
        if (that.list.length) {
            processCallback(that.list);
        }
        completeCallback();
    });
};

module.exports = XReadLine;
