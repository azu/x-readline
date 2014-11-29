// LICENSE : MIT
"use strict";

var assert = require("power-assert");
var XReadLine = require('../');
var fs = require('fs');
var rs = fs.createReadStream(__dirname + '/fixtures/test.txt', {encoding: 'utf8'});
describe("x-readline-test", function () {
    it("read by x-line", function (done) {
        var xReadLine = new XReadLine(rs);
        var results = [];
        xReadLine.forEach(3, function (list) {
            results.push(list);
        }, function () {
            assert.deepEqual(results, [
                [1, 2, 3],
                [4, 5, 6],
                [7, 8, 9]
            ]);
            done()
        });
    });
});