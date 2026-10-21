import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import "./SearchBox.css" ;
import { useState } from 'react';


export default function SearchBox({ updateInfo }){
    const API_URL = "https://api.openweathermap.org/data/2.5/weather" ;
    const API_KEY = "0b3b93a71b914f28127dfac35b62fb0a" ;

    let [city , setCity] = useState("");
    let [error , setError] = useState(false);

    let getWeatherInfo = async() =>{
        try{
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse = await response.json() ;
            console.log(jsonResponse);
            let result = {
                city : city ,
                temp : jsonResponse.main.temp ,
                tempMin : jsonResponse.main.temp_min ,
                tempMax : jsonResponse.main.temp_max ,
                humidity : jsonResponse.main.humidity ,
                feelsLikes : jsonResponse.main.feels_like ,
                weather : jsonResponse.weather[0].description ,
            }
            console.log(result);
            return result ;
       }catch(error){
            throw error ;
       }
    }

    let handleChange = (event) =>{
        setCity(event.target.value);
    }

    let handleSubmit = async(event) =>{
        event.preventDefault();
        setError(false);
       try{
            let newInfo = await getWeatherInfo() ;
            updateInfo(newInfo);
            setCity("");
       }catch(error){
            setError(true);
       }
    }

    return(
        <div className="searchbox">
            <form onSubmit={handleSubmit}>
                <TextField 
                    id="city" 
                    label="City Name" 
                    variant="outlined" 
                    required 
                    value={city}
                    onChange={handleChange}
                    />
                <br/><br/>
                <Button variant="contained" type="submit">Search</Button>
                {error && (
                    <p className="error">
                        City not found. Please check the city name.
                    </p>
                )}
            </form>
        </div>
    )
}