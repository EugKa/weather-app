import React from 'react';
import { shallow } from "enzyme";
import { Progress } from "..";

const setUp = () => shallow(<Progress/>)

describe('Progress component', () => {    
    it("should render Progress component", () => {
        const component = setUp()
        expect(component).toMatchSnapshot()
    }) 
})