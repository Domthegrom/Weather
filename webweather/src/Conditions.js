import React from 'react'
import {fetchWeather} from './WeatherAPI';

export default class Conditions extends React.Component{

 componentWillMount() {
  this.state = {
    temp: 0,
    weather: 'Default',
  }
}

  componentDidMount(){
     this.getLocation();
  }

    getLocation() {
    navigator.geolocation.getCurrentPosition(
      (posData) => fetchWeather(posData.coords.latitude,posData.coords.longitude)
      .then(res => this.setState({
        temp:Math.round(res.temp),
        weather: res.weather
      })),
      (error) => alert(error),
      {timeout: 10000}
    )
  }

  render(){
      return(
        <div>
            <h2>{this.state.weather === 'Default' ? 
              ('Loading your conditions...' )
              : 
              ('Your current conditions are: ' + this.state.weather)}
            </h2>
         </div>
      )
  }

}