import React, { Component } from "react";
import { connect } from "react-redux";
import Chart from '../components/chart'
import GoogleMap from '../components/google_map';

class WeatherList extends Component {
  renderWeather(cityData) {
    const name = cityData.city.name;
    const temps = cityData.list.map(weather => Math.floor(weather.main.temp * 9/5 -459.67));
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const humidities = cityData.list.map(weather => weather.main.humidity);
    const { lon, lat } = cityData.city.coord
   


    return (
      <tr key={name}>
        <td><GoogleMap lon={lon} lat={lat}/></td>
        <td><Chart data={temps} units="F" color="blue"/></td>
        <td><Chart data={pressures} units="hPa" color="green"/></td>
        <td><Chart data={humidities} units="%" color="red"/></td>
      </tr>
    );
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (F)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%) </th>
          </tr>
        </thead>
        <tbody>{this.props.weather.map(this.renderWeather)}</tbody>
      </table>
    );
  }
}

//we define state.weather because we assign WeatherReduces to weather in the reducer(index.js)
function mapStateToProps({ weather }) {
  //destructuring above is the same as const weather = state.weather

  //{weather } === {weather: weather}
  return { weather };
}

//default is the connected version of WeatherList
export default connect(mapStateToProps)(WeatherList);
