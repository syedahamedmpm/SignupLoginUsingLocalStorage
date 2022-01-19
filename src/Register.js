import logo from './logo.svg';
import './App.css';
import React from 'react';
import {Link} from 'react-router-dom'

class Register extends React.Component{
  constructor(props) {
    super(props);
this.state = {
  email: '',
  password: '',
  mobilenumber: '',
  address: '',
  validationErrors:{}
}
}
handleOnChange=(e)=>{
  const target = e.target
  const name=target.name
  const value = target.value
  this.setState({
    [name]: value,
    validationErrors:''
  })
}
handleSubmit=(e)=>{
  e.preventDefault();
  localStorage.setItem('document',JSON.stringify(this.state));
  const {email,password,validationErrors}=this.state
  const errors={}
  this.locData = JSON.parse(localStorage.getItem('document'))
  var specialdec=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
  const { match, location, history } = this.props
  if(!email && !password){
    console.log(email.length)
    errors['email']='Please Enter Email'
    errors['password']='Please Enter Password'
    console.log(errors)
    this.setState({
      validationErrors:errors
    })
    console.log(validationErrors)
  }
  if(!email){
    errors['email']='Please Enter Email'
    console.log(errors)
    this.setState({
      validationErrors:errors
    })
    console.log(validationErrors)
  }
  if(!password){
    errors['password']='Please Enter Password'
    console.log(errors)
    this.setState({
      validationErrors:errors
    })
    console.log(validationErrors)
  }
  else if(password.search(specialdec)){
    console.log(password)
    errors['password']='Please Enter One Upper Case,Lower Case,One Number,One Special Character'
    console.log(errors)
    this.setState({
      validationErrors:errors
    })
    console.log(validationErrors)
  }
}
componentDidMount(){
  this.locData = JSON.parse(localStorage.getItem('document'))
  this.setState({
    email: this.locData.email,
    password: this.locData.password,
    mobilenumber: this.locData.mobilenumber,
    address: this.locData.address,
  })
}
reset=()=>{
  window.localStorage.clear();
  this.setState({
    email: '',
  password: '',
  mobilenumber: '',
  address: '',
  })
}
  render(){
    const{email:emailEmptyError,password:passwordEmptyError}=this.state.validationErrors
    return(
      <div className='App'>
      <form onSubmit={this.handleSubmit}>
	  <div>
	  <input
	  type="text"
	  name="email"
	  value={this.state.email}
	  onChange={this.handleOnChange}
	  />
	  </div>
      <div>
      <span className="error">{emailEmptyError}</span>
      </div>
	  <div>
	  <input
	  type="password"
	  name="password"
	  value={this.state.password}
	  onChange={this.handleOnChange}
	  />
	  </div>
      <div>
    <span className="error">{passwordEmptyError}</span>
    </div>
	  <div>
	  <input
	  type="number"
	  name="mobilenumber"
	  value={this.state.mobilenumber}
	  onChange={this.handleOnChange}
	  />
	  </div>
	  <div>
	  <input
	  type="text"
	  name="address"
	  value={this.state.address}
	  onChange={this.handleOnChange}
	  />
	  </div>
	  <div>
	  <button className="btn btn-primary">Register</button>
	  <button className="btn btn-primary" onClick={this.reset}>Reset</button>
	  </div>
      <div>
      <div>
      <Link to="./Login">Login</Link>
    </div>
      </div>
      </form>
    </div>
      
    )
  }
}

export default Register;
