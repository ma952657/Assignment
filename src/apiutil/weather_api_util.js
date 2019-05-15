import WeatherActions from '../actions/weather_actions.js';

class WeatherApiUtil {
  getForecastData (lat, lng, location) {
    const receiveWeatherData = (data) => WeatherActions.receiveWeatherData(data.list, location);
    const query = `forecast?lat=${ lat }&lon=${ lng }`;
    const apikey = "appid=56dfd356f3b8ef699291bbc1b2b384eb";
    const units = "units=metric";
    const url = `https://api.openweathermap.org/data/2.5/${ query }&${ apikey }&${ units }`;

    $.get(url).done(receiveWeatherData);
  }
}

export default new WeatherApiUtil();
