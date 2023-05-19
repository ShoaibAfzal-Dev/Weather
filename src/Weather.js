import React, { useState } from 'react'
import Displayweather from './Displayweather'
import "./weather.css"
const Weather = () => {
    const APICODE='d9a326c93d76b7a94bb19e8e9b15acce'
    const [form,setform]=useState({
        Country:"",
        City:"",
    })
    const[Weather,setWeather]=useState([])
    const Handlechange=(e)=>{
        setform({
        ...form,[e.target.name]:e.target.value
        });
    }
  async  function HandleSubmit(e){
        e.preventDefault();
       if(form.City===''){
        alert('Add City Name')
       }
       else{
        const data= await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${form.City},${form.Country}&appid=${APICODE}`
        ).then((res)=>res.json()).then((data)=>data); 
       setWeather(
       {
        data:data
       }
       )
        setform({
            Country:"",
            City:"",
        })
    }
    }
  return (
    <div class="weather-container">
  <div class="header">
    Weather
  </div>
  <div class="forms">
    <form>
      <div class="inputs">
        {/* <input
          name="Country"
          placeholder="Country Name"
          type="text"
          onChange={Handlechange}
          value={form.Country}
        /> */}
        <input
          name="City"
          placeholder="City Name"
          type="text"
          onChange={Handlechange}
          value={form.City}
        />
      </div>
      <br />
      <div class="btn-center">
        <button onClick={(e) => HandleSubmit(e)}>Search</button>
      </div>
    </form>
    {Weather.data !== undefined ? (
      <div>
        <Displayweather key={Weather.id} dat={Weather.data} />
      </div>
    ) : null}
  </div>
</div>
  )
}

export default Weather