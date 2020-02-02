import React from 'react';
import {BrowserRouter, Route, Redirect} from 'react-router-dom';
import LoginPage from './LoginPage.js';
import MainPage from './MainPage.js';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      loggedIn: false,
      data: null
    };
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin(returnedData) {
    this.setState({
      loggedIn: true,
      data: returnedData
    }, () => console.log(this.state));
  }

  render() {
    return (
      <BrowserRouter>
        <Route path="/login" render={() => (
          this.state.loggedIn === false
          ? <LoginPage handleLogin={this.handleLogin} />
          : <Redirect to="/" />
          )} />
        <Route exact path="/" render={() => (
          this.state.loggedIn === true
            ? <MainPage data={this.state.data}/>
            : <Redirect to="/login" />
        )} />
        
      </BrowserRouter>
    );
  }
}

export default App;
