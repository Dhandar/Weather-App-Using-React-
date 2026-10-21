import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";
import "./WeatherApp.css";

export default  function WeatherApp(){
    const [weatherInfo , setweatherInfo] = useState({
        city : "Pune" ,
        feelsLikes  : 30.96 ,
        humidity : 31 ,
        temp : 32.02 ,
        tempMax : 32.02 ,
        tempMin : 32.02 ,
        weather : "few clouds" ,
    });

    let updateInfo = (newInfo) =>{
        setweatherInfo(newInfo);

    }
    return(
        <div className="weatherapp">
            <header className="app-header">
                <div className="weather-logo">☁</div>
                <h1>SkyCast</h1>
                <p>Your personal weather forecast</p>
            </header>

            <SearchBox updateInfo={updateInfo} />

            <InfoBox info={weatherInfo} />

            <footer className="app-footer">
                Made with React &amp; Material UI
            </footer>
    </div>
    )
}