import React, { Component } from 'react'

const GoogleMapApiKey = 'AIzaSyAKUAgQyzFI9Ad095DJzBQQeTRLukQwQPs'

export default class Map extends Component {
  componentDidMount() {
    // prevent scroll wheel zoom in or zoom out the map
    $('.maps').click(() => {
      $('.maps iframe').css('pointer-events', 'auto')
    })

    $('.maps').mouseleave(() => {
      $('.maps iframe').css('pointer-events', 'none')
    })
  }

  componentWillUnmount() {
    $('.maps').off('click')
    $('.maps').off('mouseleave')
  }

  render() {
    return (
      <div className='maps'>
        <iframe
          width='100%'
          height='350px'
          frameBorder='0'
          style={{border: '0'}}
          src= {'https://www.google.com/maps/embed/v1/place?q=7725%20Enterprise%20Dr%2C%20Newark%2C%20CA%2094560&key='+GoogleMapApiKey}
          allowFullScreen>
        </iframe>
      </div>
    )
  }
}
