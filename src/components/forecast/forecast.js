import "./forecast.css";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton,
} from "react-accessible-accordion";

const DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const Forecast = ({ data }) => {
  const currDay = new Date().getDay();
  const forecastDays = DAYS.slice(currDay, DAYS.length).concat(DAYS.slice(0, currDay));
  console.log(forecastDays);
  return (
    <>
      <label className="title">Daily</label>
      <Accordion allowZeroExpanded>
        {data.list.slice(0, 7).map((item, idx) => (
          <AccordionItem key={idx}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="daily-item">
                  <img
                    alt="weather"
                    className="icon-small"
                    src={`icons/${item.weather[0].icon}.png`}
                  />
                  <label className="day">{forecastDays[idx]}</label>
                  <label className="desc">{item.weather[0].description}</label>
                  <label className="min-max">{Math.round(item.main.temp_min)}&#xb0;C / {Math.round(item.main.temp_max)}&#xb0;C</label>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>

            <AccordionItemPanel>
                <div className="detail-grid">
                    <div className="detail-grid-item">
                        <label>Pressure</label>
                        <label>{item.main.pressure} hPa</label>
                    </div>
                    <div className="detail-grid-item">
                        <label>Humidity</label>
                        <label>{item.main.humidity} %</label>
                    </div>
                    <div className="detail-grid-item">
                        <label>Clouds</label>
                        <label>{item.clouds.all}%</label>
                    </div>
                    <div className="detail-grid-item">
                        <label>Wind Speed</label>
                        <label>{item.speed} m/s</label>
                    </div>
                    <div className="detail-grid-item">
                        <label>Sea Level</label>
                        <label>{item.main.sea_level}m</label>
                    </div>
                    <div className="detail-grid-item">
                        <label>Feels Like</label>
                        <label>{item.main.feels_like}&#xb0;C</label>
                    </div>
                </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
};

export default Forecast;
