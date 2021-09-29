import React from 'react';
import { shallow } from "enzyme";
import { CustomAlert } from "./index";

const props = {
    type: 'error',   
    children: 'Error'   
}

const setUp = (props:any) => shallow(<CustomAlert {...props}/>)

describe('CityCard component', () => {    
    it("should render CityCard component with propsData", () => {
        const component = setUp(props)
        expect(component).toMatchSnapshot()
    }) 
})