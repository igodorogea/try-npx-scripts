const fs = require('fs-extra')

module.exports = createLibDir

function createLibDir (libName) {
  return fs.ensureDir(libName)
    .then(() => libName)
}
