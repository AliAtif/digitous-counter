
import React from "react";
import Add from "./composants/Add";
import Button from "./composants/Button";
import List from "./composants/List";
import Pay from "./composants/Pay";
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
     this.addItem = this.addItem.bind(this);
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
 
  addItem(name, price){
  
   
  }

  checkTab=()=>{
    switch(this.state.activeTab){
      case 'add':
        return <Add></Add>

      case 'list':
        return <List></List>

      case 'pay':
        return <Pay></Pay>

      default:
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



