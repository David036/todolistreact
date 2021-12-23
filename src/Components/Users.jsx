import React, { Component } from "react";
import json from "../Components/Json";
export default class Users extends Component {
  state = {
    jsonProducts: json,
  };

  
  render() {
     
    
  let removeUser = (element) => {
    let newProducts = this.state.jsonProducts
        const index = newProducts.indexOf(element)
        newProducts.splice(index,1)
        this.setState({jsonProducts:newProducts,})
      }

    console.log(this.state.jsonProducts);
    return (
      <div className="users-section">
        {this.state.jsonProducts.map((element) => {
          return (
            <div className="user-block">
              <p>{element.licenses}</p>
              <p>{element.system_id}</p>
              <p>{element.expires}</p>
              <p>{element.cost}$</p>
              <button onClick={()=> {removeUser(element)}} className="remove-btn">REMOVE</button>
            </div>
          );
        })}
      </div>
    );
  }
}
