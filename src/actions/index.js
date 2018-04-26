import axios from 'axios';

const API_KEY = "f54f78656d096d76ff850ad75c4be18e";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;


// we do this so that we can export the variable and use it in reducers/index.js to reduce the likelihood of bugs.  Reference the variable name throughout the app and change the string here
export const FETCH_WEATHER = "FETCH_WEATHER"

export function fetchWeather(city){

    const url = `${ROOT_URL}&q=${city},us`;

    //axios.get(url) returns a promise NOT THE DATA FROM THE API
    // the promise is then sent as the payload to reducer_weather
    const request = axios.get(url);
    
    // console.log("Request: ", request)

    return {
        type: FETCH_WEATHER,
        payload: request
    }
}