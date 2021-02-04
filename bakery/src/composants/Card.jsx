
import React from "react";
import Pay from "./Pay"


class Card extends React.Component{

    constructor(){

        super();

        this.state ={
            image : "/images/item.png"
        }

    }

    click = () => {
        // Dépendant de comment a été déclarer la fonction passé en props
        // On va lui remonter un ou plusieurs arguments

        // this.props.addItem({ name: this.state.productName, price: this.state.price})
        this.props.onClick(this.props.itemName, this.props.price)
    }


    render(){
        return(
            <div className="container">
                <div className="row">
                    <button onClick={this.click} > <img src={this.state.image}/> </button>
                </div> 
            </div>
        )
    }
}
export default Card;