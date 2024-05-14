#!/usr/bin/node

const request = require('request');
const args = process.argv;

// Request URL
url2 = 'https://swapi-api.hbtn.io/api/people/18/';

let i = 0; // Declare i
let val;

request(args[2], (error, response, body) => {
  // Printing the error if occurred
  if (error) {
    console.error(error);
  } else {
    const data = JSON.parse(body).results;
    const vals = Object.values(data);
    for (val of vals) {
      // Check if the characters array includes a name that matches url2
      if (val.characters.includes(url2)) {
        i += 1;
      }
    }
    console.log(i);
  }
});
