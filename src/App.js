import React, { Component} from "react";
import {hot} from "react-hot-loader";
import "./App.css";
import UsersList from "./components/userslist"


class App extends Component{
  constructor(props){
    super(props);
  }
  
  render(){
    return(
      <div className="App">
        <UsersList />
      </div>
    );
  }
}

export default hot(module)(App);