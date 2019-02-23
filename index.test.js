const assert = require('assert')

process.nextTick(function test1 () {
  assert.ok(42)
  console.log('success: test1')
})

process.on('uncaughtException', (err) => {
  console.error(err)
})
