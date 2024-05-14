#!/usr/bin/node

const request = require('request');

// Request URL
const url = 'https://swapi-api.hbtn.io/api/films/';
const url2 = 'https://swapi-api.hbtn.io/api/people/18/';

const i = 0; // Declare i
let val;

request(url, (error, response, body) => {
  // Printing the error if occurred
  if (error) {
    console.log(error);
  } else {
    const data = JSON.parse(body);
    const data2 = data.results;
    const vals = Object.values(data2);
    for (val of vals) {
      // Check if the characters array includes a name that matches url2
      if (val.characters.includes(url2)) {
        i += 1;
      }
    }
    console.log(i);
  }
});
