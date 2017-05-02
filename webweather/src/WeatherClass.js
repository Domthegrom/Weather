import React from 'react'
export default class WeatherAPI extends React.Component{

    state = {
        lat: 20,
        lon: 20,
        weatherData: {}
    }
    rootURL = 'http://samples.openweathermap.org/data/2.5/weather?appid=d6c405dcb005958c503531c3476c4bd0'
    getWeatherInformation(){
    navigator.geolocation.getCurrentPosition(
      (posData) => this.setState({lat: posData.coords.latitude, lon: posData.coords.longitude}))
      .then(() => {
          let url = this.rootURL + "&lat=" +this.state.lat + "&lon=" +this.state.lon
          const weatherObj = fetch(url, {mode: 'no-cors'})
          .then(res => res.json())
          .then(json => {
              this.setState({weatherData: json})
          })
      })

      return this.state.weatherData

    }

}