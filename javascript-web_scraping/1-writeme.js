#!/usr/bin/node
const fs = require('fs');
const args = process.argv;
if (args.length !== 4) {
  console.error('Expected exactly two arguments!');
  process.exit(1);
} else {
  // If the number of arguments is correct,write the second argument to the file specified by the third argument
  fs.writeFile(args[2], args[3], (err) => {
    if (err) {
      console.error(err);
    }
  });
}
