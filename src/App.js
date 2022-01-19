import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Home from './Home'

class App extends React.Component{
  constructor(props) {
    super(props);
}

  render(){
    return(
      <div className='App'>
      <Switch>
        <Route path="/register" component={Register} />
        <Route path="/home" component={Home} />
        <Route path="/" component={Login} />
      </Switch>
    </div>
      
    )
  }
}

export default App;
