/* eslint-disable import/no-extraneous-dependencies */
import React from "react" 
import Enzyme from 'enzyme';
import ReactSixteenAdapter from '@wojtekmaj/enzyme-adapter-react-17';
React.useLayoutEffect = React.useEffect 
Enzyme.configure({ adapter: new ReactSixteenAdapter() });