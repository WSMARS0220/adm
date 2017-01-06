import React, { Component } from 'react'

export default class Banner extends Component {
  render() {
    return (
      <div id='banner' className='container'>
        <div id='banner-img'></div>
        <div id='banner-div-container'>
          <div className='col-md-3 banner-div'>.col-md-3</div>
          <div className='col-md-3 banner-div'>.col-md-3</div>
          <div className='col-md-3 banner-div'>.col-md-3</div>
          <div className='col-md-3 banner-div'>.col-md-3</div>
        </div>
      </div>
    )
  }
}
