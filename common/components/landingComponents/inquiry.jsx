import React, { Component, Content } from 'react'

export default class Inquiry extends Component {
  // TODO: email sender here
  constructor(props) {
    super(props)
    this.state = {
      name: 'Michael',
      phone: '',
      email: '',
      year: '',
      make: '',
      model: '',
      color: '',
      vin: '',
      comment: '',
      files: []
    }
  }

  getBase64Image(imgFile) {
    let reader = new FileReader()
    reader.onload = (e) => {
      // document.getElementById("img").src       = e.target.result
      this.setState({
        files: this.state.files.concat(e.target.result)
      })
    }
    reader.readAsDataURL(imgFile)
  }

  handleFileUpload(e) {
    if (e.target.files.length <= 9 && e.target.files.length > 0) {
      let temp = []
      for (let i=0;i<e.target.files.length;i++) {
        this.getBase64Image(e.target.files[i])
      }
    }
  }

  handleSubmit(e) {
    e.preventDefault()
    console.log(this.state)
    $.ajax({
      url: '/email',
      method: "POST",
      contentType: 'application/json',
      processData: false,
      data: JSON.stringify(this.state),
      success: function(response) {
        console.log(response.message)

      },
      error: function(error) {
          console.log(error)
          debugger;
      }
    })
  }

  render() {
    return (
      <div id='inquiry-container' className='container'>
        <h2 id='inquiry-head-title'>Inquiry</h2>
        <form id='inquiry-div-container' className='row' onSubmit={this.handleSubmit.bind(this)}>
          <input type='file' onChange={this.handleFileUpload.bind(this)} accept="image/*" multiple/>
          <button>Submit</button>
          <div id='inquiry-left-contianer' className='col'></div>
          <div id='inquiry-right-contianer' className='col'></div>
        </form>
        <img id="img" height="150"/>
      </div>
    )
  }
}
