const dirExists = require('./dir-exists')
const dirEmpty = require('./dir-empty')

module.exports = dirNotExistsOrEmpty

function dirNotExistsOrEmpty (libName) {
  return new Promise((resolve, reject) => {
    dirExists(libName)
      .then(exists => {
        if (exists) {
          dirEmpty(libName)
            .then(isEmpty => {
              if (isEmpty) {
                resolve(true)
              }
              resolve(false)
            })
            .catch(reject)
        } else {
          resolve(true)
        }
      })
      .catch(reject)
  })
}
