import React from "react"
import Card from "./Card"

class Pay extends React.Component{

    constructor(){
        super();
        this.state={
            basket : [],
            total : 0,
            totalTVA : 0,
            totalEcoTax : 0,
            totalTTC : 0
        }
    }

     handleSelect =(name, price)=>{
       
        const obj ={
            name: name,
            price: price
        }

        this.props.onClick(this.state.name, this.state.price)
    }
    
    render(){

        return(
            <div>
                <div>
                    <p>{this.state.total}</p>
                </div>
                <Card onClick={this.handleSelect}></Card>
            </div>
        )
    }
}
export default Pay;