const {normalize, resolve} = require('path')
const $home = process.env.HOME || process.env.USERPROFILE

function home () {
  let home = process.env.HOME || process.env.USERPROFILE
  if (!home) throw new Error('could not find a valid user home path')
  return normalize(resolve(home, ...arguments))
}

module.exports = {home, $home}
