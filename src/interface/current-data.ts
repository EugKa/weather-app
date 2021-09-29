export interface CurrentDataCoord {
    lon: number;
    lat: number;
}

export interface CurrentDataWeather {
    id: number;
    main: string;
    description: string;
    icon: string;
}

export interface CurrentDataMain {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
}

export interface CurrentDataWind {
    speed: number;
    deg: number;
    gust: number;
}

export interface CurrentDataClouds {
    all: number;
}

export interface CurrentDataSys {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
}

export interface CurrentData {
    data: CurrentData;
    coord: CurrentDataCoord;
    weather: CurrentDataWeather[];
    base: string;
    main: CurrentDataMain;
    visibility: number;
    wind: CurrentDataWind;
    clouds: CurrentDataClouds;
    dt: number;
    sys: CurrentDataSys;
    timezone: number;
    id: number;
    name: string;
    cod: number;
}