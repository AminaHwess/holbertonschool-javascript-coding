#!/usr/bin/node
const fs = require('fs');

const args = process.argv;

if (args.length !== 3) {
  console.error('Expected exactly one argument!');
  process.exit(1);
} else {
  // Use fs.readFile() method to read the file
  fs.readFile(args[2], 'utf8', function (err, data) {
    if (err) {
      console.error(err);
    }
    console.log(data);
  });
}
