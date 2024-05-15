#!/usr/bin/node

const request = require('request');
const args = process.argv;
let j = 0;
const userCountDict = {}; // Object to store user IDs and counts

request(args[2], (error, response, body) => {
  // Printing the error if occurred
  if (error) {
    console.log(error);
  } else {
    const data = JSON.parse(body);
    // Assuming data is sorted by userId
    let currentUser = data[0].userId;
    for (let i = 0; i < data.length; i++) {
      if (data[i].userId === currentUser) {
        if (data[i].completed === true) {
          j++;
        }
      } else {
        userCountDict[currentUser] = j; // Assign count to user ID in dictionary
        currentUser = data[i].userId;
        j = data[i].completed === true ? 1 : 0;
      }
    }
    // Assign the count for the last user
    userCountDict[currentUser] = j;

    // Print the dictionary
    console.log(userCountDict);
  }
});
