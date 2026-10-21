import "./InfoBox.css" ;

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';

export default function InfoBox({ info }){
    const INIT_URL = "https://images.unsplash.com/photo-1722858344552-7acf888a7046?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" ;
    let HOT_URL = "https://images.unsplash.com/photo-1782393961501-c29282adca44?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
    let RANIY_URL = "https://images.unsplash.com/photo-1519692933481-e162a57d6721?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" ;
    let COLD_URL = "https://images.unsplash.com/photo-1765047625874-4dfd2f9c7ad7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" ;
    
   
    return (
        <div className="infoBox">
            <Card className="weather-card" elevation={0}>
                <CardMedia
                    component="img"
                    className="weather-image"
                    image={
                        info.humidity > 80
                            ? RANIY_URL
                            : info.temp > 15
                            ? HOT_URL
                            : COLD_URL
                    }
                    alt={`${info.weather} in ${info.city}`}
                />

                <CardContent className="weather-content">
                    <Typography className="city-name" variant="h5">
                        {info.city}
                        {info.humidity > 80
                            ? <ThunderstormIcon />
                            : info.temp > 15
                            ? <SunnyIcon />
                            : <AcUnitIcon />}
                    </Typography>

                    <Typography className="weather-description">
                        {info.weather}
                    </Typography>

                    <div className="temperature">
                        {Math.round(info.temp)}°
                        <span>C</span>
                    </div>

                    <Typography className="feels-like">
                        Feels like {Math.round(info.feelsLikes)}°C
                    </Typography>

                    <div className="weather-details">
                        <div className="weather-detail">
                            <span>Humidity</span>
                            <strong>{info.humidity}%</strong>
                        </div>

                        <div className="weather-detail">
                            <span>Min temperature</span>
                            <strong>{Math.round(info.tempMin)}°C</strong>
                        </div>

                        <div className="weather-detail">
                            <span>Max temperature</span>
                            <strong>{Math.round(info.tempMax)}°C</strong>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );

}