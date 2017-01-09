import React, { Component } from "react"
import onClickOutside from 'react-onclickoutside'

export default class Header extends Component {

  render () {
    return (
      <nav id='header' className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <T />
            <img id='logo' className="navbar-brand" src='http://rzzy0b736k-flywheel.netdna-ssl.com/wp-content/uploads/2015/02/transformers-w-stroke-2.png'/>
          </div>

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav navbar-right">
              <li><a className='header-a' href='#banner'>About</a></li>
              <li><a className='header-a' href='#services'>Services</a></li>
              <li><a className='header-a' href='#inquiry'>Inquiry</a></li>
            </ul>
          </div>
        </div>
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

  componentDidMount() {
    // remove ul when hamburger disappear
    $(window).resize(()=>{
      if (this.state.hamburgerToggle){
        this.setState({hamburgerToggle: false})
      }
    })
  }

  componentWillUnmount() {
    $(window).off('resize')
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

  renderList() {
    if (this.state.hamburgerToggle){
      return (
        <ul id='hamburger-toggle-ul'>
          <li id='header-a-h-1' className='header-a-h'>About</li>
          <li id='header-a-h-2' className='header-a-h'>Services</li>
          <li id='header-a-h-3' className='header-a-h'>Inquiry</li>
        </ul>
      )
    }
    return null
  }

  render() {
    return (
      <div>
        <button type="button" className="navbar-toggle collapsed" onClick={this.hamburgerToggle.bind(this)}>
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
        {this.renderList()}
      </div>
    )
  }
}

const T = onClickOutside(Toggle)
