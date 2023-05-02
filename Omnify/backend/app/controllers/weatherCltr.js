const { default: axios } = require("axios");
const express = require("express");
const weatherCltr = {};

weatherCltr.show = (req, res) => {
  const city = req.body.city;
  const apiKey = "8ad3cdd851d26e9d2f0924b6637f7784";

  axios
    .get(
      `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=8ad3cdd851d26e9d2f0924b6637f7784`
    )
    .then(response => {
      console.log(response.data[0].lat, response.data[0].lon);
      const lat = response.data[0].lat;
      const lon = response.data[0].lon;
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=8ad3cdd851d26e9d2f0924b6637f7784`
        )
        .then(city => {
          res.json(city.data);
        })
        .catch(err => {
          res.json(err);
        });
    })
    .catch(err => {
      res.json(err);
    });
};

module.exports = weatherCltr;
