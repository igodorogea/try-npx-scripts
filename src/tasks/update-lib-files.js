const fs = require('fs-extra')

module.exports = updateLibFiles

function updateLibFiles () {
  return fs.readdir('templates')
    .then(files => console.log(resp))
}
