import React, { Component } from 'react'
import Banner from './landingComponents/banner'
import Services from './landingComponents/services'
import Map from './landingComponents/map'
import Inquiry from './landingComponents/inquiry'

export default class LandingPage extends Component {

  render () {
    return (
      <div>
        <img style={style.img} src='/img/page-not-found.jpg' />
        <h2 style={style.h2}>404 Page is not found!!</h2>
      </div>
    )
  }
}

const style = {
  h2: {
    position: 'absolute',
    top: '50%',
    width: '100%',
    fontSize: '55px',
    paddingLeft: '5%',
    fontWeight: '800',
    minWidth: '720px',
    color: 'rgb(255, 11, 11)',
  },

  img: {
    width: '100%',
  }
}
