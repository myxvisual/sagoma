var path = require('path')
var fs = require('fs')

module.exports = function findRootPaths(callback) {
  var runningPath = process.cwd()
  var cwdDirArr = runningPath.split(path.sep)
  var findRootProject = false
  var rootPath
  var rootPackageJSONPath
  var rootPaths = []

  while (cwdDirArr.length > 0) {
    rootPath = cwdDirArr.join(path.sep)
    rootPackageJSONPath = rootPath + path.sep + 'package.json'
    if (fs.existsSync(rootPackageJSONPath)) {
      findRootProject = true
      rootPaths.push(rootPath)
    }
    cwdDirArr.pop()
  }

  if (callback) callback(rootPaths)
}