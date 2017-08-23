// test/basic-mocha.js
/* global describe it context */
require('tap').mochaGlobals()
var should = require('should')
var Task = require('../api/models/todoListModel.js')

describe('Tasks', function () {
  var t = new Task()
  context('When creating a new empty Task', function () {
    it('throws a ValidationError', function () {
      t.validate(function (err) {
        err.name.should.equal('ValidationError')

        t.name = 'New Name'
        t.validate(function (err) {
          should.not.exist(err)

          // Make sure Created_date is set to now
          t.Created_date.should.equal(Date.now())

          // Make sure the default status is 'pending'
          t.status.should.equal('pending')
        })
      })
    })
  })
})
