import React from "react"


class Add extends React.Component{

    constructor(props){

        super(props);

        this.state ={
            productName :"",
            price : 1
        }

        this.updateProductName= this.updateProductName.bind(this);
        this.updatePrice= this.updatePrice.bind(this);
    }

    updateProductName(event){

        this.setState({
            productName : this.updateProductName.onChange,
            
        })

    }


    updatePrice(event){
        this.setState({
            price : this.updatePrice.onChange,
        })
    }


    render(){

        return(
            <div>
                Add

                <input type="text" onChange={this.updateProductName} min="0" max="10"/>
                <button className = "btn btn-primary" onClick={this.props.onClick}>Add</button><br/>
                <input type="range" onChange ={this.updatePrice} value=""/>
            </div>

        )
    }
}
export default Add;