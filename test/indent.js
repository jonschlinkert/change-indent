/*!
 * change-indent <https://github.com/jonschlinkert/change-indent>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT License
 */

'use strict';

var should = require('should');
var detect = require('detect-indent');
var change = require('..');


describe('change indent', function () {
  it('should change indentation from 2 to 4', function () {
    change('    foo', 2).should.equal('  foo');
    change('  foo', 3).should.equal('   foo');
    change('  foo', 6).should.equal('      foo');
    change('      foo', 6).should.equal('      foo');
    change('      foo', 2).should.equal('  foo');
  });
});
