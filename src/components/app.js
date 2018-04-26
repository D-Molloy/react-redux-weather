import React, { Component } from 'react';

import SearchBar from '../containers/search_bar';
import WeatherList from '../containers/weather_list';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1 className="text-center">Five Day Weather Forecast</h1>
        <h6 className="text-center"><em>Weather Data from openweathermap.org</em></h6>
        <h6 className="text-center"><em>Maps courtesy of the Google Maps API</em></h6>
        <SearchBar />
        <WeatherList />
      </div>
    );
  }
}
