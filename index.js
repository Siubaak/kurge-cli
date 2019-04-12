#! /usr/bin/env node

const fs = require('fs')
const ora = require('ora')
const path = require('path')
const { ncp } = require('ncp')
const program = require('commander')
const package = require('./package')
const { exec } = require('child_process')

program.version(package.version)
  .option('-i, --init [app]', 'init a kurge scaffold')
  .parse(process.argv)

if (typeof program.init !== 'string' || !program.init) {
  program.help()
}

if (fs.existsSync(program.init)) {
  throw new Error(`${program.init} app has already exists in current directory`)
}

const spinner = ora(`Generating ${program.init} app...`).start()
ncp(path.resolve(__dirname, 'templates/parcel'), program.init, function (err) {
  if (err) {
    throw err
  } else {
    spinner.succeed(`Generated ${program.init} app`)
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
