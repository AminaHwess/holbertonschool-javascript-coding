#!/usr/bin/node
const fs = require('fs');
const request = require('request');
const args = process.argv;

// Making an HTTP request to the URL specified in the second command-line argument
request(args[2], (error, response, body) => {
  // Printing the error if occurred
  if (error) {
    console.error(error);
  } else {
    // Writing the response body to a file specified in the third command-line argument
    fs.writeFile(args[3], body, 'utf8', (err) => {
      if (err) {
        console.error(err);
      }
    });
  }
});
