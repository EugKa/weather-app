import React from 'react';
import { shallow } from "enzyme";
import { CityCard } from "..";

const props = {
    data:   { 
                coord: {
                lon: -0.1257,
                lat: 51.5085
            },
            weather: [
                {
                    id: 802,
                    main: "Clouds",
                    description: "scattered clouds",
                    icon: "03d"
                }
            ],
            base: "stations",
            main: {
                temp: 16.07,
                feels_like: 15.48,
                temp_min: 14.83,
                temp_max: 18.43,
                pressure: 1011,
                humidity: 67
            },
            visibility: 10000,
            wind: {
                speed: 0.89,
                deg: 267,
                gust: 5.36
            },
            clouds: {
                all: 40
            },
            dt: 1632745281,
            sys: {
                type: 2,
                id: 2019646,
                country: "GB",
                sunrise: 1632722081,
                sunset: 1632764890
            },
            timezone: 3600,
            id: 2643743,
            name: "London",
            cod: 200,},
    
    handleDelete: (id: number, city: string) => {},
    handleSelect: (lon: number, lat: number, city: string) => {},
    handleUpdate: (city: string, id: number) => {},
    
}
const empty = {
    data: {},   
    handleDelete: (id: number, city: string) => {},
    handleSelect: (lon: number, lat: number, city: string) => {},
    handleUpdate: (city: string, id: number) => {},
    
}

const setUp = (props:any) => shallow(<CityCard {...props}/>)

describe('CityCard component', () => {    
    it("should render CityCard component with propsData", () => {
        const component = setUp(props)
        expect(component).toMatchSnapshot()
    }) 
    
    it("should render CityCard component without propsData", () => {
        const component = setUp(empty)
        expect(component).toMatchSnapshot()
    }) 
    describe('CityCard handlers', () => {
        const component = setUp(props)
        it("should click handleDelete", () => {
           const btn = component.find('.btn-delete');
           btn.simulate('click')
           expect(component).toMatchSnapshot();
        }) 
        it("should click handleSelect", () => {
            const btn = component.find('.btn-info');
            btn.simulate('click')
            expect(component).toMatchSnapshot();
        })
        it("should click handleUpdate", () => {
            const btn = component.find('.btn-update');
            btn.simulate('click')
            expect(component).toMatchSnapshot();
        })
    })
})


