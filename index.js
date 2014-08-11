/*!
 * change-indent <https://github.com/jonschlinkert/change-indent>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT License
 */


'use strict';

var detect = require('./temp');

module.exports = function(str, n) {
  var re = /^([\u0020\t]*)/;

  var indent = detect.stats(str);
  var amount = indent.amount;

  str = str.replace(/\r/g, '');

  return str.split(/\n/g).map(function(line, i) {
    var len = line.match(re)[0].length;
    var text = line.replace(/^\s+/, '');
    var num = Math.round((len / amount) * n);

    var lead;
    if (len === 0) {
      lead = '';
    } else {
      lead = new Array(num + 1).join(' ');
    }
    return lead + text;
  }).join('\n');
};
