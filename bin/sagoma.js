var path = require('path')
var fs = require('fs')
var os = require('os')

var runningPath = path.resolve('../../react-uwp/')
var cwdDirArr = runningPath.split(path.sep)
var findLastRoot = false
var packageJSONPath = ''

while (cwdDirArr.length !== 0 && !findLastRoot) {
  packageJSONPath = cwdDirArr.join(path.sep) + path.sep + 'package.json'
  if (fs.existsSync(packageJSONPath)) {
    findLastRoot = true
  } else {
    cwdDirArr.pop()
  }
}

console.log(packageJSONPath)
