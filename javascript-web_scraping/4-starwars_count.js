#!/usr/bin/node

const request = require('request');
const args = process.argv;

// Request URL
const url2 = 'https://swapi-api.hbtn.io/api/people/18/';

let i = 0;
let val;

request(args[2], (error, response, body) => {
  // Printing the error if occurred
  if (error) {
    console.error(error);
  } else {
    const data = JSON.parse(body);
    const data2 = data.results;
    const vals = Object.values(data2);
    for (val of vals) {
      if (val.characters.includes(url2)) {
        i += 1;
      }
    }
    console.log(i);
  }
});
