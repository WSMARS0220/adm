import React, { Component, Content } from 'react'

export default class Inquiry extends Component {
  // TODO: loading img
  // TODO: thumdmail preview

  constructor(props) {
    super(props)
    this.state = {
      name: '',
      phone: '',
      email: '',
      year: '',
      make: '',
      model: '',
      color: '',
      vin: '',
      comments: '',
      files: [],
      filesName: [],
      fileSizeCount: 0,
      uploadMessage: null,
    }
  }

  getBase64Image(imgFile) {
    let reader = new FileReader()
    reader.onload = (e) => {
      // document.getElementById("img").src       = e.target.result
      this.setState({
        files: this.state.files.concat(e.target.result),
        filesName: this.state.filesName.concat(imgFile.name),
        fileSizeCount: this.state.fileSizeCount+imgFile.size
      })
      console.log('current files length: ', this.state.filesName.length)
    }
    reader.readAsDataURL(imgFile)
  }

  handleFileUpload(e) {
    // upload limit is 25mb
    let sizeCount = this.state.fileSizeCount
    for (let i=0;i<e.target.files.length;i++) {
      sizeCount+=e.target.files[i].size
    }
    console.log('current files size: ', sizeCount/1000000)
    if (sizeCount/1000000 > 25) {
      this.setState({
        files: [],
        filesName: [],
        fileSizeCount: 0,
        uploadMessage: 'Please upload photos again, total files cannot be larger than 25MB!'
      })
    } else {
      for (let i=0;i<e.target.files.length;i++) {
        this.getBase64Image(e.target.files[i])
      }
    }
  }

  handleNameOnChange(e) {
    e.preventDefault()
    this.setState({name: e.target.value})
  }

  handleEmailOnChange(e) {
    e.preventDefault()
    this.setState({email: e.target.value})
  }

  handleMakeOnChange(e) {
    e.preventDefault()
    this.setState({make: e.target.value})
  }

  handleColorOnChange(e) {
    e.preventDefault()
    this.setState({color: e.target.value})
  }

  handlePhoneOnChange(e) {
    e.preventDefault()
    this.setState({phone: e.target.value})
  }

  handleYearOnChange(e) {
    e.preventDefault()
    this.setState({year: e.target.value})
  }

  handleModelOnChange(e) {
    e.preventDefault()
    this.setState({model: e.target.value})
  }

  handleVinOnChange(e) {
    e.preventDefault()
    this.setState({vin: e.target.value})
  }

  handleCommentsOnChange(e) {
    e.preventDefault()
    this.setState({comments: e.target.value})
  }

  handleDeleteBtn() {
    this.setState({
      files: [],
      filesName: [],
      fileSizeCount: 0,
      uploadMessage: null
    })
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

  renderFileLabel() {
    if (this.state.files.length > 1) {
      return this.state.files.length + ' Files Selecetd'
    } else if (this.state.files.length == 1) {
      return '1 File Selecetd'
    } else {
      return 'Choose a file'
    }
  }

  renderFileNames() {
    if (this.state.filesName.length > 0 && !this.state.uploadMessage) {
      return (
        <ul id='file-name-ul'>
          {this.state.filesName.map((name, idx)=>{
            return <li className='file-name' key={idx}>{name}</li>
          })}
          <img id='delete-btn' src='/img/Delete.png' onClick={this.handleDeleteBtn.bind(this)}/>
        </ul>
      )
    }
    return null
  }

  render() {
    return (
      // *Name, *Phone number, *Email, *Photos (ex Front, Back, damage part, etc), Make, Model, Year, Comments, Files (9 photos)
      <div id='inquiry' className='container'>
        <h2 id='inquiry-head-title'>Inquiry</h2>
        <form id='inquiry-div-container' onSubmit={this.handleSubmit.bind(this)}>
          <h6 style={style.h6}>* is required</h6>
          <div id='inquiry-left-contianer' className='col-md-6'>
            <div id='inquiry-left-contianer-left'>
              <h4 className='input-label'>Name<span style={style.span}>*</span>: </h4>
              <input className='info-input' onChange={this.handleNameOnChange.bind(this)} required/>
              <h4 className='input-label'>Email<span style={style.span}>*</span>: </h4>
              <input className='info-input' onChange={this.handleEmailOnChange.bind(this)} required/>
              <h4 className='input-label'>Make: </h4>
              <input className='info-input' onChange={this.handleMakeOnChange.bind(this)}/>
              <h4 className='input-label'>Color: </h4>
              <input className='info-input' onChange={this.handleColorOnChange.bind(this)}/>
            </div>
            <div id='inquiry-left-contianer-right'>
              <h4 className='input-label'>Phone<span style={style.span}>*</span>: </h4>
              <input className='info-input' onChange={this.handlePhoneOnChange.bind(this)} required/>
              <h4 className='input-label'>Year: </h4>
              <input className='info-input' onChange={this.handleYearOnChange.bind(this)}/>
              <h4 className='input-label'>Model: </h4>
              <input className='info-input' onChange={this.handleModelOnChange.bind(this)}/>
              <h4 className='input-label'>VIN#: </h4>
              <input className='info-input' onChange={this.handleVinOnChange.bind(this)}/>
            </div>
          </div>
          <div id='inquiry-right-contianer' className='col-md-6'>
            <h4 className='input-label'>Files<span style={style.span}>*</span>: </h4>
            <input type="file" name="file" id="file" className="inputfile" onClick={()=>{this.setState({uploadMessage: null})}} onChange={this.handleFileUpload.bind(this)} accept="image/*" multiple required/>
            <label htmlFor="file">{this.renderFileLabel()}</label>
            <div id="file-name-container">
              {this.renderFileNames()}
              <p>{this.state.uploadMessage}</p>
            </div>
            <h4 className='input-label'>Comments: </h4>
            <textArea id='comments' placeholder='More details' onChange={this.handleCommentsOnChange.bind(this)}></textArea>
            <button id='submit-btn'>Submit</button>
          </div>
        </form>
      </div>
    )
  }
}

const style = {
  h6: {
    fontSize: '15px',
    padding: '0px 15px',
    color: 'red',
  },
  span: {
    color: 'red',
  }
}
