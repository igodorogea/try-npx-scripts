const fs = require('fs-extra')

module.exports = dirExists

/**
 * helper function which check if a directory exists
 * and returns a promise which
 * - resolves with true when directory exist
 * - resolves with false when directory does not exist
 * - rejects when an error happens
 */
function dirExists(libName) {
  return new Promise((resolve, reject) => {
    fs.stat(libName, (err, stats) => {
      if (err) {
        // directory does not exist
        if (err.code === 'ENOENT') {
          resolve(false)
        } else {
          reject('Something went wrong', JSON.stringify(err))
        }
      } else if (stats.isDirectory()) {
        resolve(true)
      } else {
        resolve(false)
      }
    })
  })
}
