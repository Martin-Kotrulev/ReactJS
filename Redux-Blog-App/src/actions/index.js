import axios from 'axios'

const API_KEY = '7a9fb14aa5feb8fe1ebe30bd5d68721c';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather(city) {
  console.log(city)
  const url = `${ROOT_URL}&q=${city},bg`
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  }
}