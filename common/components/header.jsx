import React, { Component } from "react"
import onClickOutside from 'react-onclickoutside'

export default class Header extends Component {

  constructor(props) {
    super(props)
    console.log('is mobile: ', this.props.userAgent.isMobile)
    if (this.props.userAgent.isMobile) {
      this.state = {
        device: 'mobile'
      }
    } else {
      this.state = {
        device: 'else'
      }
    }
  }

  handleAboutClick() {
    $('body').animate({scrollTop: $('#banner').offset().top}, 200);
  }

  handleServicesClick() {
    $('body').animate({scrollTop: $('#services').offset().top}, 350);
  }

  handleInquiryClick() {
    $('body').animate({scrollTop: $('#inquiry').offset().top}, 500);
  }

  renderBtnDiv() {
    if (this.state.device != 'mobile') {
      return (
        <div id='header-btn-container'>
          <button className='header-btn' onClick={this.handleAboutClick}>About</button>
          <button className='header-btn' onClick={this.handleServicesClick}>Services</button>
          <button className='header-btn' onClick={this.handleInquiryClick}>Inquiry</button>
        </div>
      )
    }
    return <T />
  }

  render () {
    return (
      <nav id='header'>
        <img id='logo' src='/img/logo.png'/>
        {this.renderBtnDiv()}
      </nav>
    )
  }
}

//hamburger menu
class Toggle extends Component {

  constructor (props) {
    super(props)
    this.state = {
      hamburgerToggle: false
    }
  }

  handleClickOutside () {
    this.setState({hamburgerToggle: false})
  }

  hamburgerToggle() {
    if (this.state.hamburgerToggle) {
      this.setState({hamburgerToggle: false})
    } else {
      this.setState({hamburgerToggle: true})
    }
  }

  handleAboutClick() {
    this.setState({hamburgerToggle: false})
    $('body').animate({scrollTop: $('#banner').offset().top}, 500);
  }

  handleServicesClick() {
    this.setState({hamburgerToggle: false})
    $('body').animate({scrollTop: $('#services').offset().top}, 500);
  }

  handleInquiryClick() {
    this.setState({hamburgerToggle: false})
    $('body').animate({scrollTop: $('#inquiry').offset().top}, 500);
  }

  renderList() {
    if (this.state.hamburgerToggle){
      return (
        <ul id='hamburger-toggle-ul'>
          <li id='header-a-h-1' className='header-a-h' onClick={this.handleAboutClick.bind(this)}>About</li>
          <li id='header-a-h-2' className='header-a-h' onClick={this.handleServicesClick.bind(this)}>Services</li>
          <li id='header-a-h-3' className='header-a-h' onClick={this.handleInquiryClick.bind(this)}>Inquiry</li>
        </ul>
      )
    }
    return null
  }

  renderBtn() {
    if (this.state.hamburgerToggle) {
      return <button id="cross-btn" onClick={this.hamburgerToggle.bind(this)}>&#735;</button>
    }
    return <button id='hambuger-btn' onClick={this.hamburgerToggle.bind(this)}>&#9776;</button>
  }

  render() {
    return (
      <div>
        {this.renderBtn()}
        {this.renderList()}
      </div>
    )
  }
}

const T = onClickOutside(Toggle)
