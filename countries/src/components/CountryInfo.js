import axios from 'axios'
import { useEffect, useState } from 'react';

const CountryInfo = ({name, capital, area, languages, flag}) => {

    
    const [weather, setWeather] = useState(null)
    //console.log(capital[0])

    useEffect(()=>{
        //query parameters 
        const api_key = process.env.REACT_APP_API_KEY
        const params = {
            q: capital[0], 
            appid: api_key,
            units: 'metric'
        }

        axios
        .get('https://api.openweathermap.org/data/2.5/weather', {params})
        .then((response)=>{
            setWeather(response.data)
            console.log(response.data)
         })
        .catch(error=>console.log(error))

    },[capital])
    
    console.log(weather)


    //weather.main.temp
    /*<div>Current temperature: {weather.main.temp} degrees Celcius</div>

            <p>Wind speed: {weather.wind.speed}</p> */
    //const temperature = weather.main.temp
    //weather.weather[0].icon
    //weather.weather[0].description
    if(weather!==null){
        return(
            <div>
                <h2>{name}</h2>
                
                <div>Capital: {capital}</div>
                <div>Area: {area} square kilometers</div>
                
                <h3>languages:</h3>
                
                {Object.values(languages).map((language)=>
                    <li key={language}>{language}</li>
                )}
                
                <img src={flag} alt="picture of the national flag" />
                
                <h3>Weather in {capital}</h3>
                <div>Current temperature:  {weather.main.temp} degrees Celsius</div>
                <div>Current conditions: {weather.weather[0].description}</div>
    
                <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}/>
                <div>Wind speed: {weather.wind.speed} m/s</div>
                
            </div>
        )
    }
    
}

export default CountryInfo;