import { useEffect, useState } from "react";
import axios from "axios";
import WeatherChild from "./WeatherChild";
import moment from 'moment';

const WeatherHanoi = (props) => {
    const [weatherArr, setWeatherArr] = useState([]);
    const [locationArr, setLocationArr] = useState([]);
    const [date, setDate] = useState('')
    const [update, setUpdate] = useState('');
    const [isLoading, setIsLoading] = useState(false);


    useEffect(async () => {
        setIsLoading(true);
        let response = await axios({
            method: 'post',
            url: 'http://reacthook-hoidanit-backend.herokuapp.com/get-data-by-url',
            data: { url: `http://metaweather.com/api/location/1236594` }
        })
        let formatTime = moment(response.data.time).format();
        let formatTimeUpdate = moment(response.data.consolidated_weather[0].created).format();

        setLocationArr(response.data);
        setWeatherArr(response.data.consolidated_weather);

        setDate(moment(formatTime.slice(0, -6)).format('h:mm a'));
        setUpdate(moment(formatTimeUpdate.slice(0, -6)).startOf('hour').fromNow(formatTime));
        setIsLoading(false);

        // console.log(moment(response.data.consolidated_weather[0].created.slice(0, -1) + '+07:00').format('h:mm a'));
        // console.log(moment(response.data.time).format('h:mm a'));
        // console.log(response.data.consolidated_weather[0].created.slice(0, -1) + '+07:00');

    }, []);


    return (
        <div className="hanoi">
            {isLoading && <div className="loading"></div>}
            {!isLoading && <div className="display-detail">
                <div className="display-detail-container">
                    <div className="location-preview">
                        <div className="display-detail-city">{locationArr.title}</div>
                        <div>{date}</div>
                        <div>{`Updated ${update} ago`}</div>
                    </div>
                    {!!weatherArr.length && weatherArr.map((weather, index) => {
                        return <div key={index}>
                            <WeatherChild
                                applicableDate={weather.applicable_date}
                                weatherStateName={weather.weather_state_name}
                                weatherStateAbbr={weather.weather_state_abbr}
                                minTemp={weather.min_temp}
                                maxTemp={weather.max_temp}
                                windSpeed={weather.wind_speed}
                                windDirection={weather.wind_direction}
                            />
                        </div>
                    })}
                </div>
            </div>}
        </div>
    )
}

export default WeatherHanoi;