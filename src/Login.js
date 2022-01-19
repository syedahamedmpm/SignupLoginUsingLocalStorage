import logo from './logo.svg';
import './App.css';
import React from 'react';
import {Link} from 'react-router-dom'
class Login extends React.Component{
  constructor(props) {
    super(props);
this.state = {
  email: '',
  password: '',
  validationErrors:{}
}
}
handleOnChange=(e)=>{
  const target = e.target
  const name=target.name
  const value = target.value
  this.setState({
    [name]: value
  })
}
handleSubmit=(e)=>{
  e.preventDefault();
  const {email,password,validationErrors}=this.state
  const errors={}
  this.locData = JSON.parse(localStorage.getItem('document'))
  
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
  
  else if(email==this.locData.email && password==this.locData.password){
      console.log("Matching")
      console.log(password)
      history.push('/home')
  }
  else {
      console.log("Not Matching")
  }
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
	  <button className="btn btn-primary">Login</button>	  </div>
    <div>
      <Link to="./Register">Register</Link>
    </div>
      </form>
    </div>
      
    )
  }
}

export default Login;