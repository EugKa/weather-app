import React from 'react';
import { shallow } from "enzyme";
import { CityFullInfo } from "..";

const props = {
   params: "London",
   current: {
    clouds: 40,
    dew_point: 9.31,
    dt: 1632751749,
    feels_like: 16.74,
    humidity: 59,
    pressure: 1013,
    sunrise: 1632722081,
    sunset: 1632764890,
    temp: 17.4,
    uvi: 1.65,
    visibility: 10000,
    weather: [
        {id: 802, main: 'Clouds', description: 'scattered clouds', icon: '03d'}
    ],
    wind_deg: 266,
    wind_gust: 3.58,
    wind_speed: 0.45,
   },
   timezone_offset : 3600
}


const setUp = (props:any) => shallow(<CityFullInfo {...props}/>)

describe('CityFullInfo component', () => {    
    it("should render CityFullInfo component with propsData", () => {
        const component = setUp(props)
        expect(component).toMatchSnapshot()
    }) 
})


