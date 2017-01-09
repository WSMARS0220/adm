import React, { Component } from 'react'

export default class Services extends Component {
  // TODO: services component is here
  render() {
    return (
      <div id='services' className='container'>
        <h2 id='services-head-title'>Services</h2>
        <div id='services-div-container'>
          <div className='col-md-3 services-div'>.col-md-3</div>
          <div className='col-md-3 services-div'>.col-md-3</div>
          <div className='col-md-3 services-div'>.col-md-3</div>
          <div className='col-md-3 services-div'>.col-md-3</div>
        </div>
      </div>
    )
  }
}
