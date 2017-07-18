import React, { Component } from 'react'
import ReactCSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'

export default class Banner extends Component {

  constructor() {
    super()
    this.state = {
      index: 0
    }
    this.imgSet1 = ['http://res.cloudinary.com/ddjurvqs8/image/upload/v1489278042/1_faa8ez.jpg',
                    'http://res.cloudinary.com/ddjurvqs8/image/upload/v1489278042/2_nthf1k.jpg']
    this.imgSet2 = ['http://res.cloudinary.com/ddjurvqs8/image/upload/v1489278042/3_teqplp.jpg',
                    'http://res.cloudinary.com/ddjurvqs8/image/upload/v1489278042/4_v3hqbp.jpg']
  }

  componentDidMount() {
    this.interval = setInterval(()=>{
      if (this.state.index === 0) {
        this.setState({ index: 1 })
      } else if (this.state.index === 1) {
        this.setState({ index: 0 })
      }
    }, 6168)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  renderImage() {
    if (this.state.index === 0) {
      return (
        <div id='banner-img-container' key={0}>
          <img src={this.imgSet1[0]} className='banner-img' style={{borderRight: '1px solid white'}}/>
          <img src={this.imgSet1[1]} className='banner-img' style={{borderLeft: '1px solid white'}}/>
          <img src={this.imgSet2[0]} className='banner-img' style={{display: 'none'}}/>
          <img src={this.imgSet2[1]} className='banner-img' style={{display: 'none'}}/>
        </div>
      )
    } else if (this.state.index === 1) {
      return (
        <div id='banner-img-container' key={1}>
          <img src={this.imgSet1[0]} className='banner-img' style={{display: 'none'}}/>
          <img src={this.imgSet1[1]} className='banner-img' style={{display: 'none'}}/>
          <img src={this.imgSet2[0]} className='banner-img' style={{borderRight: '1px solid white'}}/>
          <img src={this.imgSet2[1]} className='banner-img' style={{borderLeft: '1px solid white'}}/>
        </div>
      )
    }
  }

  render() {
    return (
      <div id='banner' className='container'>
        <ReactCSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={200}
          transitionLeave={false}>
          {this.renderImage()}
        </ReactCSSTransitionGroup>
        <div id='banner-div-container'>
          <div className='col-md-3 banner-div'>
            <h4>Professional Consultation</h4>
            <p>Call to setup an appointment.</p>
          </div>
          <div className='col-md-3 banner-div'>
            <h4>Full Service Collision Repair</h4>
            <p>We work with all insurance companies. We will provide support through every step of your insurance claim.</p>
          </div>
          <div className='col-md-3 banner-div'>
            <h4>Damage Assessment</h4>
            <p>Our certified trained technicians will assess all damages on your vehicle.</p>
          </div>
          <div className='col-md-3 banner-div'>
            <h4>Collision Repair and Refinish</h4>
            <p>Every vehicle will be repaired and refinished to factory standards</p>
          </div>
        </div>
      </div>
    )
  }
}
