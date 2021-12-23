import React, { Component } from "react";
import "./style.scss";
import Users from "./Users";

export default class Main extends Component {
  
  render() {
    
    return (
      <div className="main">
        <div className="main-section">
          <h1>Licenses</h1>
          <Users />
         
        </div>
      </div>
    );
  }
}
