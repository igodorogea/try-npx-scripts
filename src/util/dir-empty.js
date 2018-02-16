const fs = require('fs-extra')

module.exports = dirEmpty

/**
 * helper function which check if a directory is empty
 * and returns a promise which
 * - resolves with true when directory is empty
 * - resolves with false when directory is not empty
 * - rejects when an error happens
 */
function dirEmpty(libName) {
  return new Promise((resolve, reject) => {
    fs.readdir(libName, (err, files) => {
      if (err) {
        reject('Something went wrong', JSON.stringify(err))
      } else {
        if (!files.length) {
          resolve(true)
        } else {
          resolve(false)
        }
      }
    })
  })
}
