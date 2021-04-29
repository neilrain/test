'use strict';

const path = require('path');

const fs = jest.createMockFromModule('fs');

function __setMockFile(fileName) {

    this.fileName = fileName;
}

function existsSync(name){

  return this.fileName == name;
}

fs.__setMockFile = __setMockFile;
fs.existsSync = existsSync;

module.exports = fs;