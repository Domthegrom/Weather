import React from 'react'
import {fetchWeather} from './WeatherAPI';

export default class Weather extends React.Component{

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
      .then(res => {
          const faren = this.convertToF((res.temp))
          this.setState({
        temp: faren,
        weather: res.weather
      })
    }
      ),
      (error) => alert(error),
      {timeout: 10000}
    )
  }

  convertToF(temp) {
        const faren = Math.round(((9/5)* (temp -273)) +32)
        console.log("converting " + temp +" to " +faren)
        return faren
       }

  render(){
      return(
        <div>
            <h2>{this.state.temp === 0 ? 
                "Loading your weather..."
                : 
                ("The current Temperature is " + this.state.temp + "°")}
            </h2>
        </div>
      )
  }

}