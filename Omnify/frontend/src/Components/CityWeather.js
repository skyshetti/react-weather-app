import React from "react";
import "./CityWeather.css";
import { Icon } from "react-icons-kit";
import { androidCloud } from "react-icons-kit/ionicons/androidCloud";
import { weatherWindyCloudy } from "react-icons-kit/typicons/weatherWindyCloudy";
import { weatherWindy } from "react-icons-kit/typicons/weatherWindy";
import { socialGithub } from "react-icons-kit/typicons/socialGithub";
import { Card } from "antd";

//
//
const CityWeather = props => {
  const { cityData } = props;
  return (
    <div>
      {Object.keys(cityData).length > 0 && (
        <div>
          <Card
            title={
              <span style={{ color: "red", fontSize: "20px" }}>
                {`${cityData.name}`}
              </span>
            }
            bordered={true}
            style={{
              width: 350,
            }}
          >
            <div>
              <Icon icon={androidCloud} />
              <p>Temperature {cityData.main.temp} C</p>
            </div>
            <div>
              <Icon icon={weatherWindyCloudy} />
              <p>Humidity - {cityData.main.humidity}</p>
            </div>
            <div>
              <Icon icon={weatherWindy} />
              <p> Wind Speed - {cityData.wind.speed} m/s</p>
            </div>
            <div>
              <Icon icon={socialGithub} />
              <p>Visibility - {cityData.visibility}</p>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
};

export default CityWeather;
