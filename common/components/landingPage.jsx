import React, { Component } from 'react'
import Banner from './landingComponents/banner'
import Services from './landingComponents/services'
import Map from './landingComponents/map'
import Inquiry from './landingComponents/inquiry'

export default class LandingPage extends Component {

  render () {
    return (
      <div id='splash-page'>
        <Banner />
        <Services />
        <Map />
        <Inquiry />
      </div>
    )
  }
}
