import React from 'react'

function Displayweather(props){
    console.log(props)
    const data=props.dat
    const iconURL=`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
  return (
    <div className="center-page">
    <div className="my-app">
      <div className="first-display">
        <div className="center-data">
          <div className="name-time">
            <p>{data.name}, {data.sys.country} Weather</p>
            <p className="time-now">As of {new Date().toLocaleTimeString()}</p>
          </div>
          <h1>
            {Math.floor(data.main.temp - 273.15)}<sup>o</sup>C
          </h1>
          <div className="icon-weather">
            {data.weather[0].main}
            <img src={iconURL} alt="" />
          </div>
        </div>
      </div>
      <div className="details">
        <div className="center-details">
          <div className="one-div">
            <div className="temp-h">
              <h3>High/Low:</h3>
              <p>{Math.floor(data.main.temp_max - 273.15)}/ {Math.floor(data.main.temp_min - 273.15)}<sup>o</sup>C</p>
            </div>
            <div className="temp-h">
              <h3>Humidity:</h3>
              <p>{data.main.humidity} %</p>
            </div>
          </div>
          <div className="two-div">
            <div className="temp-h">
              <h3>Pressure:</h3>
              <p>{data.main.pressure} hpa</p>
            </div>
            <div className="temp-h">
              <h3>Visibility:</h3>
              <p>{data.visibility} km</p>
            </div>
          </div>
          <div className="three-div">
            <div className="temp-h">
              <h3>Wind:</h3>
              <p>{Math.floor((data.wind.speed * 18) / 5)} Km/hr</p>
            </div>
            <div className="temp-h">
              <h3>Wind Direction:</h3>
              <p>{data.wind.deg}<sup>o</sup>deg</p>
            </div>
          </div>
          <div className="four-div">
            <div className="temp-h">
              <h3>Sunrise:</h3>
              <p>{new Date(data.sys.sunrise * 1000).toLocaleTimeString()}</p>
            </div>
            <div className="temp-h">
              <h3>Sunset:</h3>
              <p>{new Date(data.sys.sunset * 1000).toLocaleTimeString()}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Displayweather