
import React from "react";
import Add from "./composants/Add";
import Button from "./composants/Button";
import List from "./composants/List";
import Pay from "./composants/Pay";
import Card from "./composants/Card";

// import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
// import { Button } from "bootstrap";

class App extends React.Component {

  constructor(props){

    super(props);
     this.state = {
       activeTab : "add",
       items: [],
     }

     this.selectAdd = this.selectAdd.bind(this);
     this.selectList = this.selectList.bind(this);
     this.selectPay = this.selectPay.bind(this);
     this.add = this.add.bind(this)
  }

  selectAdd(event){
    this.setState({
     activeTab : "add"
    }
    )
    
  }

  selectList(event){
    this.setState({
      activeTab : "list"
    }
     
    ) 
  }

  selectPay(event){
    this.setState({
      activeTab : "pay"
    }  
    ) 
  }
 
  add(name, price){
    const obj = {
      name: name,
      price: price
    }
    const newList = this.state.items
    newList.push(obj)
    this.setState({
      items: newList
    })
   
  }

  checkTab=()=>{
    switch(this.state.activeTab){
      case 'add':
        return <Add addItem={this.add}></Add>
      case 'list':
        return <List listItems={this.state.items}></List>
      case 'pay':
        return <Pay items={this.state.items}></Pay>

    }
  }


  render() {

    return (
      <div className="App">
  
        <Button onClick={this.selectAdd} isSelected ={this.state.activeTab === "add" ?true:false}>Add</Button>  
        <Button onClick={this.selectList} isSelected ={this.state.activeTab === "list" ?true:false}>List</Button>  
        <Button onClick={this.selectPay} isSelected ={this.state.activeTab === "pay" ?true:false}>Pay</Button>

        {this.checkTab()}
       
      </div>
    )
  }
}

export default App;



