import React, { useState, useEffect } from "react";
 
function App() {
  const [city, setCity] = useState("Delhi");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
 
  // const currentDate = new Date();
  // const months = ["January", "February", "March", "April", "May", "June",
  //   "July", "August", "September", "October", "November", "December"];
  // const month = months[currentDate.getMonth()];
  // const day = currentDate.getDate();
  // const year = currentDate.getFullYear();
  // const formattedDate = `${month} ${day}, ${year}`;

  const currentDate = new Date();
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = currentDate.toLocaleDateString('en-US', options);
 
  const API_KEY = "f16ea3085c31a82115eef4c9f2857513";
 
  const fetchWeatherData = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      if (!response.ok) {
        throw new Error("City not found");
      }
      const data = await response.json();
      setWeatherData(data);
      setError(null);
    } catch (error) {
      console.error("Error fetching weather data:", error);
      setError("City not found. Please try again!!!");
      setWeatherData(null);
    }
  };
 
  useEffect(()=>{
  fetchWeatherData();
  },[])
 
  const handleInputChange = (event) => {
    setCity(event.target.value);
  };
 
  const handleSubmit = (event) => {
    event.preventDefault();
    fetchWeatherData();
  };
 
  const getWeatherIconUrl = (main) => {
    switch (main) {
      case "Clear":
        return "/clear1.png";
      case "Rain":
        return "/cloud_rain.png"; 
      case "Snow":
        return "/tornado.png"; 
      case "Cloudy":
        return "/sun.png"; 
      case "Haze":
        return "/sun.png"; 
      default:
        return "/sun.png";
    }
  };
 
 
  return (
    <div className="App">
      <div className="container">
        <h1 className="container_date">{formattedDate}</h1>

        {error && <p className="error">{error}</p>}

        {weatherData ? (
          <div className="weather_data">
            <h2 className="container_city">{weatherData.name}</h2>
            <img
              className="container_img"
              src={getWeatherIconUrl(weatherData.weather[0].main)}
              width="180px"
              alt="Weather Icon"
            />
            <h2 className="container_degree">{weatherData.main.temp}°C</h2>
            <h2 className="country_per">
              {weatherData.weather[0].main}
            </h2>
          </div>
        ) : (
          <p>Loading weather data...</p>
        )}

        <form className="form" onSubmit={handleSubmit}>
          <input
            type="text"
            className="input"
            placeholder="Enter city name"
            value={city}
            onChange={handleInputChange}
            required
          />
          <button type="submit">Go</button>
        </form>
      </div>
    </div>
  );
}
 
export default App;