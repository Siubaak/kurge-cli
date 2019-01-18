#! /usr/bin/env node

const fs = require('fs')
const ora = require('ora')
const path = require('path')
const { ncp } = require('ncp')
const program = require('commander')
const package = require('./package')
const { exec } = require('child_process')

program.version(package.version)
  .option('-i, --init [app]', 'init a kurge scaffold', 'kurge')
  .parse(process.argv)

const spinner = ora('Generating app...').start()
if (fs.existsSync(program.init)) {
  throw new Error(`${program.init} app has already exists in current directory`)
} else {
  ncp(path.resolve(__dirname, 'templates/parcel'), program.init, function (err) {
    if (err) {
      throw err
    } else {
      spinner.succeed('Generated app')
      spinner.start('Installing dependecies...')
      exec(`cd ${program.init}; npm install; cd ..;`, function (err) {
        if (err) {
          throw err
        } else {
          spinner.succeed('Installed dependecies')
          spinner.info(`Success! Happy coding!\n\n  cd ${program.init}\n  npm start\n`)
        }
      })
    }
  })
}