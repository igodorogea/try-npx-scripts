const fs = require('fs-extra')
const { promptForLibName, createLibDir, copyTemplates, updateLibFiles } = require('./src/tasks')
/**
 * Flow
 * 1. prompt for lib name(kebab-case)
 * 2. create lib folder
 * 3. copy templates
 * 4. update files
 * 5. run `npm install`
 * 6. run `git init` and `git commit ...`
 */

promptForLibName()
  .then(createLibDir)
  .then(copyTemplates)
  .then(updateLibFiles)
  .catch(err => console.error(err))

// console.log('yay')
// console.log(process.cwd())
// console.log(__dirname)
