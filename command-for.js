module.exports = function (args = {}) {
  return Object.keys(args)
    .reduce((commandString, key, i, object) => {
      const value = args[key]
      return commandString + ` --${key} ${value}`
    }, 'fswebcam')
}
