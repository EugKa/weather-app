import React from 'react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import { shallow } from 'enzyme';


test('renders the component', () => {
  const component = shallow(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>);
  expect(component).toMatchSnapshot();
}); 

test('renders App component', () => {
  const component = shallow(
      <App />
);
  expect(component).toMatchSnapshot();
}); 


