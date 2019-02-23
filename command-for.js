module.exports = function (args = {}) {
  return Object.keys(args)
    .reduce((commandString, key) => {
      const value = args[key]
      return commandString + ` --${key} ${value}`
    }, 'fswebcam')
}
