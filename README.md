# x-readline

Read stream by `x`-lines.

## Installation

```
npm install x-readline
```

## Usage

```js
/**
 * Constructor
 * @param stream input stream
 * @constructor
 */
function XReadLine(stream) {}

/**
 * @param {Number} unit get line by `unit`
 * @param {Function} processCallback callback - when get each line.
 * @param {Function} completeCallback callback - when complete all line.
 */
xReadLine.prototype.forEach = function (unit, processCallback, completeCallback) {}
```

### Example

```js
var XReadLine = require('../lib/x-readline');
var fs = require('fs');
var rs = fs.createReadStream(__dirname + '/fixtures/test.txt', {encoding: 'utf8'});
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
```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## License

MIT