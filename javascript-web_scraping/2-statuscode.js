#!/usr/bin/node
const request = require('request');
const args = process.argv;

request(args[2], (error, response) => {
  // Printing the error if occurred
  if (error) {
    console.error(error);
  }

  // Printing status code
  console.log('code: ' + response.statusCode);
});
