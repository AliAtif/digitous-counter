


import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom"; 
import Card from "./Card"


class PopularBattle extends React.Component{

    constructor(){
        super();
        this.state = {
            filmsList: [],
            currentBattle: 0,
        }

    }

    render(){

        return(
            <>
                <h1>PopularBattle</h1>
             
            </>  

        )
    }

}
export default PopularBattle;