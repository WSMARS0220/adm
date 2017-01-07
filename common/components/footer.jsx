import React, { Component } from "react"

export default class Footer extends Component {
  render () {
    return (
      <div id="footer" className='container'>
        <div id='contact-info' className='col-sm-4 footer-div'>
          <h4>Contact Information</h4>
          <h6><span style={{fontWeight:'bold'}}>Address: </span>7725 Enterprise Dr, Newark, CA 94560</h6>
          <h6><span style={{fontWeight:'bold'}}>Phone: </span>(xxx)xxx-xxxx</h6>
          <h6><span style={{fontWeight:'bold'}}>Email: </span>xxxxxx@xxxx.com</h6>
        </div>
        <div id='hours' className='col-sm-4 footer-div'>
          <h4>Business Hour</h4>
          <h6>Mon-Fri: xx:xx - xx:xx</h6>
          <h6>Sat-Sun: xx:xx - xx:xx</h6>
        </div>
        <div id='social-media' className='col-sm-4 footer-div'>
          <h4>Social Media</h4>
          <div id='facebook'></div>
          <div id='ins'></div>
        </div>
      </div>
    )
  }
}
