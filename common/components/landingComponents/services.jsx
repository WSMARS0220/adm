import React, { Component } from 'react'

export default class Services extends Component {
  // TODO: services component is here
  render() {
    return (
      <div id='services' className='container'>
        <h2 id='services-head-title'>Services</h2>
        <div id='services-div-container'>
          <div className='col-md-3 services-div'><img className='services-img' src='http://res.cloudinary.com/ddjurvqs8/image/upload/c_fill,h_225,w_285/v1500402360/1269F053-5F43-4EAB-AD4F-06CBEEB4CA03_pfsi7c.jpg'/></div>
          <div className='col-md-3 services-div'><img className='services-img' src='http://res.cloudinary.com/ddjurvqs8/image/upload/c_scale,h_225,w_284/v1500402357/IMG_0171_bihnq0.jpg'/></div>
          <div className='col-md-3 services-div'><img className='services-img' src='http://res.cloudinary.com/ddjurvqs8/image/upload/c_scale,h_225,w_284/v1500402351/IMG_0855_arroyi.jpg'/></div>
          <div className='col-md-3 services-div'><img className='services-img' src='http://res.cloudinary.com/ddjurvqs8/image/upload/c_fill,h_225,w_284/v1500402350/IMG_0856_sqybcr.jpg'/></div>
        </div>
      </div>
    )
  }
}
