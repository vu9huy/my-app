import { useEffect, useState, useRef } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";


const Search = () => {
    const [keyword, setKeyword] = useState('');
    const [locationArr, setLocationArr] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isHadResult, setIsHadResult] = useState(false);
    let history = useHistory();


    const handleClickSearch = async () => {
        setIsLoading(true);
        let responseSearch = await axios({
            method: 'post',
            url: 'https://reacthook-hoidanit-backend.herokuapp.com/get-data-by-url',
            data: { url: `http://metaweather.com//api/location/search/?query=${keyword}` }
        })
        if (responseSearch && responseSearch.data) {
            let locationObj = responseSearch.data;
            if (Object.values(locationObj).length) {
                setLocationArr(Object.values(locationObj))
            } else {
                setLocationArr([])
            }
        }
        if (Object.keys(responseSearch.data).length === 0) {
            setIsHadResult(true);
        } else {
            setIsHadResult(false)
        }
        console.log('locationArr', locationArr);
        setIsLoading(false);
        setKeyword('');
    }
    function handleViewDetail(woeid) {
        history.push(`/my-app/weather-app/location/${woeid}`);
    }

    return (
        <div className="weather-app-search">
            <div className="search-field">
                <input type='text'
                    placeholder="Enter a location..."
                    value={keyword}
                    autoFocus
                    onChange={(e) => setKeyword(e.target.value)}
                />
                <button onClick={() => handleClickSearch()}>Search</button>
            </div>
            {isLoading && <div className="loading wait-search"></div>}
            {!isLoading && isHadResult && <div className="no-result">No result</div>}
            {!isLoading && !isHadResult && <ul className="weather-app-search-result">
                {locationArr.length > 0 && locationArr.map((location) => {
                    return (<li className="location-response"
                        onClick={() => handleViewDetail(location.woeid)}
                        key={`location - ${location.title}`}>
                        {`${location.title}`}</li>)
                })}
            </ul>}

        </div>

    )
}

export default Search;