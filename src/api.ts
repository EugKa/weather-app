const URL = 'https://api.openweathermap.org/data/2.5'

export async function fetchHourCastWeather(lat:  number, lon: number) {
    try {
        const response = await fetch(`${URL}/onecall?lat=${lat}&lon=${lon}&exclude=minutely&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);       
    }
}

export async function fetchCurrentWeather(city: string) {
    try {
        const response = await fetch(`${URL}/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
        );
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);       
    }
}

export async function parallelCall(city: string[]) {
    try {
        const promises = city.map((city) =>
            fetch(`${URL}/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`).then((response) => response.json())
        );
        const data = await Promise.all(promises);
        return data;
    } catch (error) {
        console.log(error);     
    }
}
