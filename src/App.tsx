import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';
import { Header, NotFound } from './components';
import { MainPage, CityInfo } from './pages';

function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact component={MainPage} path='/'/>
        <Route component={CityInfo} path='/city/:name'/>
        <Route component={NotFound}/>
      </Switch>
    </div>
  );
}

export default App;
