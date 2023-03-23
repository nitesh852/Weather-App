import React from 'react'
import styled from 'styled-components'


const SearchBox = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin: 20px;

  align-items: center;

  & input {
    display: flex;
    padding: 10px;
    font-size: 14px;
    border: none;
    border-bottom: 1px dashed;
    outline: none;
    font-family: Montserrat;
    font-weight: bold;
  }
  & button {
    background-color: #9c9cb5;
    font-size: 14px;
    padding: 0 10px;
    color: white;
    border: 1px solid black;
    border-radius: 13px;
    outline: black;
    cursor: pointer;
    font-family: Montserrat;
    font-weight: bold;
  }
`;

//   color: black;
//   margin: 10px auto;
//   font-size: 18px;
//   font-weight: bold;
// `;
// const WelcomeWeatherLogo = styled.img`
//   width: 140px;
//   height: 140px;
//   margin: 40px auto;
// `;


const Form = (props) => {
    const { updateCity, updateCountry, fetchWeather } = props;
    return (
      <>
        <SearchBox onSubmit={fetchWeather}>
          <div>{props.error ? error() : ""}</div>
          
              <input
              onChange={(e) => updateCity(e.target.value)}
                type="text"
                className="form-control"
                placeholder="City"
                name="city"
                autoComplete="off"
              />
           
              <input
               onChange={(e) => updateCountry(e.target.value)}
                type="text"
                className="form-control"
                placeholder="Country"
                name="country"
                autoComplete="off"
              />
           
              <button className="btn btn-warning">Submit</button>
            
        </SearchBox>
      </>
    );
  };
  
  const error = props => {
    return (
      <div className="alert alert-danger mx-5" role="alert">
        Please Enter City and Country...!
      </div>
    );
  };

export default Form