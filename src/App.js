import Form from "./components/Form";
import Weather from "./components/Weather";
import styled from "styled-components";
import Axios from "axios";
import { useState } from "react";



const Main = styled.h1`
text-align: center;
margin-bottom: 40px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  padding: 20px 10px;
  margin: auto;
  border-radius: 5px;
  border: 2px dashed;
  box-shadow: 0 3px 6px 0 #555;
  background: white;
  font-family: Montserrat;
  
  &
  
`;

function App() {
  // const Api_Key = "2fdcef46d6ffd493947c367cf38ef906";

  const [city, updateCity] = useState();
  const [country, updateCountry] = useState();
  const [weather, updateWeather] = useState();
  const fetchWeather = async (e) => {
    e.preventDefault();
    const response = await Axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=2fdcef46d6ffd493947c367cf38ef906`,
    );
    console.log(response.data)
    updateWeather(response.data);
    
  };

    return (
    <div className="App">
    <Main>Weather App</Main>
  
  <Container>
      
      {city && country && weather ? (
        <Weather weather={weather} city={city} country={country} />
      ) : (
        <Form updateCity={updateCity} updateCountry={updateCountry} fetchWeather={fetchWeather} />
        
      )}
    </Container>
    </div>
  );
}

export default App;
