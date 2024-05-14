#!/usr/bin/node

const request = require('request');
const url = 'https://swapi-api.hbtn.io/api/films/';

let count = 0;

request(url, (err, res, body) => {
  if (err) throw err;
  const data = JSON.parse(body);
  const films = data.results;

  films.forEach((film) => {
    film.characters.forEach((characterId) => {
      if (characterId === '18') count++; // Assuming character IDs are strings
    });
  });

  console.log(count + ' films feature Wedge Antilles.');
});
