const assert = require('assert')
const commandFor = require('./command-for')

process.nextTick(function commandForArgs () {
  const expected = `fswebcam --save snapshots/cam.png --skip 10 --png 100`
  const result = commandFor({ save: 'snapshots/cam.png', skip: 10, png: 100 })
  assert.strictEqual(result, expected)
  console.log('✅  commandForArgs')
})

process.on('uncaughtException', (err) => {
  console.error(err)
})
