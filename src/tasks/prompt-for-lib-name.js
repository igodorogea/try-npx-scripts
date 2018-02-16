const inquirer = require('inquirer')

const { dirNotExistsOrEmpty } = require('../util')

module.exports = () => inquirer
  .prompt([{
    type: 'input',
    name: 'libraryName',
    message: 'Give your library a name(kebab-case).\nIt will also be the directory name:',
    default: 'my-awesome-typescript-library',
    validate: function (value) {
      // Declare function as asynchronous, and save the done callback
      const done = this.async()
      const pass = value.match(/^[a-z]([a-z\-1-9])*([a-z1-9])$/)
      if (pass) {
        dirNotExistsOrEmpty(value)
          .then(success => {
            if (success) {
              done(null, true)
            } else {
              done(`Directory "${value}" already exists and is not empty`)
            }
          })
          .catch(err => console.error(err))
      } else {
        done('Please enter a valid library name')
      }
    },
  }])
  .then(answer => answer.libraryName)
