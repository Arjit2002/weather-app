import "./current-weather.css";

const CurrentWeather = ({ data }) => {
  return (
    <div className="weather">
      <div className="top">
        <div className="">
          <p className="city">{data.city}</p>
          <p className="weather-desc">{data.weather[0].description}</p>
        </div>
        <img alt="weather" className="weather-icon" src={`icons/${data.weather[0].icon}.png`} />
      </div>
      <div className="bottom">
        <p className="temperature">{Math.round(data.main.temp)}&#xb0;C</p>
        <div className="details">
          <div className="param-row">
            <span className="param-label top">Details</span>
          </div>
          <div className="param-row">
            <span className="param-label">Feels like </span>
            <span className="param-value">{Math.round(data.main.feels_like)}&#xb0;C</span>
          </div>
          <div className="param-row">
            <span className="param-label">Wind </span>
            <span className="param-value">{data.wind.speed} m/s</span>
          </div>
          <div className="param-row">
            <span className="param-label">Humidity </span>
            <span className="param-value">{data.main.humidity}%</span>
          </div>
          <div className="param-row">
            <span className="param-label">Pressure </span>
            <span className="param-value">{data.main.pressure} hPa</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
