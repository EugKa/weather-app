import React from 'react';
import { shallow } from "enzyme";
import { EighthDayForecast } from "..";

const props = {
   params: "London",
   data: {
        clouds: 83,
        dew_point: 8.99,
        dt: 1632740400,
        feels_like: {day: 15.08, night: 11.95, eve: 16.3, morn: 16.09},
        humidity: 64,
        moon_phase: 0.7,
        moonrise: 1632774960,
        moonset: 1632747420,
        pop: 1,
        pressure: 1011,
        rain: 3.49,
        sunrise: 1632722081,
        sunset: 1632764890,
        temp: {day: 15.78,
            eve: 17.12,
            max: 17.67,
            min: 12.72,
            morn: 16.17,
            night: 12.72},
        uvi: 2.17,
        weather: [{id: 501, main: 'Rain', description: 'moderate rain', icon: '10d'}],
        0: {id: 501, main: 'Rain', description: 'moderate rain', icon: '10d'},
        length: 1,
        wind_deg: 201,
        wind_gust: 20.34,
        wind_speed: 10.06,
   },
   timezone_offset : 3600
}


const setUp = (props:any) => shallow(<EighthDayForecast {...props}/>)

describe('EighthDayForecast component', () => {    
    it("should render EighthDayForecast component with propsData", () => {
        const component = setUp(props)
        expect(component).toMatchSnapshot()
    }) 
})
