import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import WeatherChild from "./WeatherChild";
import Search from "./Search";
import moment from "moment";

const DisplayDetail = () => {
    let { locationid } = useParams();
    const [weatherArr, setWeatherArr] = useState([]);
    const [locationObj, setLocationObj] = useState([]);
    const [date, setDate] = useState('');
    const [update, setUpdate] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(async () => {
        setIsLoading(true);
        let response = await axios({
            method: 'post',
            url: 'https://reacthook-hoidanit-backend.herokuapp.com/get-data-by-url',
            data: { url: `http://metaweather.com/api/location/${locationid}` }
        })
        let formatTime = moment(response.data.time).format();
        let formatTimeUpdate = moment(response.data.consolidated_weather[0].created).format();

        setLocationObj(response.data);
        setWeatherArr(response.data.consolidated_weather);

        setDate(moment(response.data.time.slice(0, -6)).format('h:mm a'));
        setUpdate(moment(formatTimeUpdate.slice(0, -6)).startOf('hour').fromNow(formatTime));
        setIsLoading(false);

        console.log(response.data.time);
        // console.log(formatTime);
        console.log(response.data.time.slice(0, -6));
        console.log(moment(response.data.time.slice(0, -6)).format('h:mm a'));
        // console.log(moment(formatTimeUpdate).format('h:mm a'));
        // console.log(moment(formatTimeUpdate).startOf('hour').fromNow(formatTime));
    }, [locationid]);


    return (
        <div className="display-detail">
            <Search />
            {isLoading && <div className="loading"></div>}
            {!isLoading && <div className="display-detail-container">
                <div className="location-preview">
                    <div className="display-detail-city">{locationObj.title}</div>
                    <div>{date}</div>
                    <div>{`Updated ${update} ago`}</div>
                </div>
                {weatherArr.map((weather, index) => {
                    return <div key={index}>
                        <WeatherChild
                            applicableDate={moment(weather.applicable_date).format("ddd D MMM YY")}
                            weatherStateName={weather.weather_state_name}
                            weatherStateAbbr={weather.weather_state_abbr}
                            minTemp={weather.min_temp}
                            maxTemp={weather.max_temp}
                            windSpeed={weather.wind_speed}
                            windDirection={weather.wind_direction}
                        />
                    </div>
                })}
            </div>}
        </div>
    )
}

export default DisplayDetail;