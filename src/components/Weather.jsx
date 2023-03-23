import React from "react";
import styled from "styled-components";




const Location = styled.span`
  margin: 15px auto;
  text-transform: capitalize;
  font-size: 28px;
  font-weight: bold;
`;
const Condition = styled.span`
  margin: 20px auto;
  text-transform: capitalize;
  font-size: 14px;
  & span {
    font-size: 28px;
  }
`;


const WeatherContainer = styled.div`
  display: flex;
  width: 100%;
  margin: 30px auto;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const WeatherInfoContainer = styled.div`
  
  display: grid;
  row-gap: 50px;
  grid-template-columns: auto auto;
  column-gap: 150px;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
`;
const InfoContainer = styled.div`
  display: flex;
  margin: 5px 10px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px dashed;
`;
// const InfoIcon = styled.img`
//   width: 36px;
//   height: 36px;
// `;
const InfoLabel = styled.span`
  display: flex;
  flex-direction: row;
  font-size: 20px;
//   margin: 15px;
margin-bottom: 15px;
// margin-right: -40px
  
  & span {
    font-size: 20px;
    text-transform: capitalize;
    padding-right: 35px
  }
`;

const WeatherInfoComponent = (props) => {
  const { name, value } = props;
  return (
    <InfoContainer>
      {/* <InfoIcon src={WeatherInfoIcons[name]}/> */}
      <InfoLabel>
        <span>{name}</span>
        <span>{value}</span>
      </InfoLabel>
    </InfoContainer>
  );
};
const Weather = (props) => {
  const { weather } = props;
  
  const getTime = (timeStamp) => {
    return `${new Date(timeStamp * 1000).getHours()} : ${new Date(
      timeStamp * 1000
    ).getMinutes()}`;
  };
  return (
    <>
      <WeatherContainer>
        <Condition>
          <span>{`${Math.floor(weather?.main?.temp - 273)}°C`}</span>
          <span>{`  |  ${weather?.weather[0].description}`}</span>
        </Condition>
        
      </WeatherContainer>
      <Location>{`${weather?.name}, ${weather?.sys?.country}`}</Location>

      {/* <WeatherInfoLabel>Weather Info</WeatherInfoLabel> */}
      <WeatherInfoContainer>
        <WeatherInfoComponent
          name={"High/Low"}
          value={`${Math.floor(weather?.main?.temp_min - 273)}°C/${Math.floor(weather?.main?.temp_max - 273)}°C`}
        />
        <WeatherInfoComponent
          name={"Wind"}
          value={`${weather?.wind?.speed} km/hr`}
        />
        <WeatherInfoComponent
          name="Humidity"
          value={`${weather?.main?.humidity} %`}
        />
        <WeatherInfoComponent
          name={"Wind Direction"}
          value={`${weather?.wind?.deg}°Deg`}
        />
        <WeatherInfoComponent
          name={"Pressure"}
          value={`${weather?.main?.pressure} hPa`}
        />
        <WeatherInfoComponent
          name={"Sunrise"}
          value={`${getTime(weather?.sys?.sunrise)}`}
        />
        <WeatherInfoComponent
          name={"Visibility"}
          value={`${weather?.visibility / 1000} Km`}
        />
        <WeatherInfoComponent
          name={"Sunset"}
          value={`${getTime(weather?.sys?.sunset)}`}
        />

       
      </WeatherInfoContainer>
    </>
  );
};

export default Weather;
