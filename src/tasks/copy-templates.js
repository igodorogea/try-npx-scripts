const fs = require('fs-extra')

module.exports = copyTemplates

function copyTemplates(dest) {
  return fs.copy('templates', dest)
}
