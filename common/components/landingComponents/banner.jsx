import React, { Component } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

export default class Banner extends Component {

  constructor() {
    super()
    this.state = {
      index: 0
    }
    this.imgSet1 = ['/img/banner/1.jpg', '/img/banner/2.jpg']
    this.imgSet2 = ['/img/banner/3.jpg', '/img/banner/4.jpg']
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
          <div className='col-md-3 banner-div'>.col-md-3</div>
          <div className='col-md-3 banner-div'>.col-md-3</div>
          <div className='col-md-3 banner-div'>.col-md-3</div>
          <div className='col-md-3 banner-div'>.col-md-3</div>
        </div>
      </div>
    )
  }
}
