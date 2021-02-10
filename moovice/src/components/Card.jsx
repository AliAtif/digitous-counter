
import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom"; 


class Card extends React.Component{

    render(){

        return(
            <>
            {this.props.movie.title}
            <img src={`https://image.tmdb.org/t/p/w300/${this.props.movie.poster_path}`}/>
            </>
        )
          
        
    }

}
export default Card;