import React from "react";
import { useState } from "react";
import axios from "axios";
import CityWeather from "./CityWeather";
import { Input } from "antd";
import "./HomePage.css";

//
//
const HomePage = () => {
  const [city, setCity] = useState("");
  const [error, setError] = useState("");
  const [cityData, setCityData] = useState({});
  const [msg, setMsg] = useState("");

  const handleSearchChange = e => {
    setError("");
    setMsg("");
    setCity(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const fomrData = {
      city,
    };

    if (city.length > 0) {
      axios
        .post(`http://localhost:3333/api/weather`, fomrData)
        .then(response => {
          setCity("");
          setMsg("");
          setError("");
          if (Object.keys(response.data).length > 0) {
            setCityData(response.data);
          } else {
            setMsg("No results found..!");
            setCityData({});
          }
        })
        .catch(err => {
          alert(err);
        });
    } else {
      setError("cant be blank");
    }
  };

  return (
    <div className='main'>
      <form onSubmit={handleSubmit}>
        <Input
          className='inputElement'
          size='large'
          type='text'
          placeholder='search city'
          value={city}
          onChange={handleSearchChange}
        />

        <input className='input-button' type='submit' />
      </form>
      {msg && <span className='error'>{msg}</span>}
      {error && <span className='error'>{error}</span>}
      <div className='cityWeatherContainer'>
        {Object.keys(cityData).length > 0 && (
          <div className='card'>
            <CityWeather cityData={cityData} />
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
