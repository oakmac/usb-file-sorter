#!/usr/bin/env node
'use strict';

var program = require('commander');
var fs = require('fs-plus');
var packageInfo = require('./package.json');

var source, destination;

program
  .version(packageInfo.version)
  .description(packageInfo.description)
  .usage('<source> <destination>')
  .arguments('<source> <destination>')
  .action(function(src, dest){
    source = src;
    destination = dest;
  })
  .parse(process.argv);

// Show help text if no arguments are given
if (!program.args.length) {
    program.help();
}

if (!fs.existsSync(source)) {
   console.error('The source does not exist');
   process.exit(1);
}

fs.copySync(source, destination);
