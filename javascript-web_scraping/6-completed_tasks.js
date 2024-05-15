#!/usr/bin/node

const request = require('request');
const args = process.argv;
const userCountDict = {}; // Object to store user IDs and counts

request(args[2], (error, response, body) => {
  // Printing the error if occurred
  if (error) {
    console.log(error);
  } else {
    const data = JSON.parse(body);
    for (let i = 0; i < data.length; i++) {
      if (!userCountDict[data[i].userId]) {
        userCountDict[data[i].userId] = 0;
      }
      if (data[i].completed === true) {
        userCountDict[data[i].userId]++;
      }
    }

    // Print the dictionary
    console.log(userCountDict);
  }
});
