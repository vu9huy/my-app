import './Weather.scss';
import Search from './Search';
import WeatherHanoi from './WeatherHanoi';

const WeatherApp = () => {

    return (
        <div className='weather-app-container'>
            <Search />
            <WeatherHanoi />
        </div>
    )
}

export default WeatherApp;

