import React, { Component } from 'react'

const GoogleMapApiKey = 'AIzaSyAKUAgQyzFI9Ad095DJzBQQeTRLukQwQPs'

export default class Map extends Component {
  // TODO: google map api is here
  render() {
    return (
      <iframe
        width="100%"
        height="350"
        frameBorder="0"
        style={{border: '0'}}
        src= {"https://www.google.com/maps/embed/v1/place?q=7725%20Enterprise%20Dr%2C%20Newark%2C%20CA%2094560&key="+GoogleMapApiKey}
        allowFullScreen>
      </iframe>
    )
  }
}
