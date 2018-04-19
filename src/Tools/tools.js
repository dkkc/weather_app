const WEATHER_ICON_API = 'https://www.weatherbit.io/static/img/icons/';
const OPEN_WEATHER_MAP_ICON = 'http://openweathermap.org/img/w/';

export const getTemp = (args) => {
    const temp = args + '°C';
    return temp;
}


export const getWeatherIcon = (iconCode) => {
    const weather_icon = WEATHER_ICON_API + iconCode + '.png';
    return weather_icon;
} 

export const getOpenWeatherMapIcon = (iconCode) => {
    const open_weather_icon = getWeatherIcon(iconCode).slice(1,4);
    const icon = OPEN_WEATHER_MAP_ICON + open_weather_icon+'.png';
    console.log('open' , open_weather_icon);
    return icon;
}
 

