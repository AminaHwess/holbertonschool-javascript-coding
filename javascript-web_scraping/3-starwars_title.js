#!/usr/bin/node

const request = require('request');
const args = process.argv;

// Request URL
const url = 'https://swapi-api.hbtn.io/api/films/' + args[2];

request(url, (error, response, body) => {
  // Printing the error if occurred
  if (error) {
    console.log(error);
  } else {
    const data = JSON.parse(body);
    console.log(data.title);
  }
});
