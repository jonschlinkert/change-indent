/*!
 * change-indent <https://github.com/jonschlinkert/change-indent>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT License
 */

'use strict';

var assert = require('assert');
var should = require('should');
var detect = require('detect-indent');
var helper = require('test-helpers')({dir: 'test'});
var change = require('..');


describe('change indent: spaces', function () {
  it('should change indentation from 2 to 4', function () {
    var fixture = helper.readFixture('package.json');
    var before = detect.stats(fixture);
    before.amount.should.equal(2);

    var actual = change(fixture, 4);
    helper.writeActual('package.json', actual);
    var after = detect.stats(actual);
    after.amount.should.equal(4);
  });

  it('should re-align indentation to 2', function () {
    var fixture = helper.readFixture('misaligned.json');
    var before = detect.stats(fixture);
    before.amount.should.equal(2);

    var actual = change(fixture, 2);
    helper.writeActual('aligned.json', actual);
    var after = detect.stats(actual);
    after.amount.should.equal(2);
  });

  it('should change JSON indentation from 2 to 6', function () {
    var fixture = helper.readFixture('misaligned.json');
    var before = detect.stats(fixture);
    before.amount.should.equal(2);

    var actual = change(fixture, 6);
    helper.writeActual('aligned.json', actual);
    var after = detect.stats(actual);
    after.amount.should.equal(6);
  });

  it('should change markdown indentation from 2 to 6', function () {
    var fixture = helper.readFixture('two/list.md');
    var before = detect.stats(fixture);
    before.amount.should.equal(2);

    var actual = change(fixture, 6);
    helper.writeActual('two/list.md', actual);
    var after = detect.stats(actual);
    after.amount.should.equal(6);
  });


  it('should change markdown indentation from 5 to 2', function () {
    var fixture = helper.readFixture('five/code-block.md');
    var before = detect.stats(fixture);
    before.amount.should.equal(2);

    var actual = change(fixture, 6);
    helper.writeActual('five/code-block', actual);
    var after = detect.stats(actual);
    after.amount.should.equal(6);
  });
});
