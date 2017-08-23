// test/basic.js
var tap = require('tap')
var Task = require('../api/models/todoListModel.js')

// Make sure Name is required
var t = new Task()
t.validate(function (err) {
  console.log('err.name: ' + err.name)
  tap.equal(err.name, 'ValidationError')
})

// Make sure Created_date is set to now
tap.equal(t.Created_date, Date.now())

// Make sure the default status is 'pending'
tap.equal(t.status, 'pending')
