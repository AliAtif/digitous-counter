
import React from "react";
// import { BrowserRouter, Route, Link, Switch } from "react-router-dom"; 
import Popular from "./Popular.jsx";


class Card extends React.Component{

    render(){

        return(
            <>
                <h3>Titre: {this.props.movie.title}</h3>
                <h5>Année de sortie : {this.props.movie.release_date}</h5>
                 <img src={`https://image.tmdb.org/t/p/w300/${this.props.movie.poster_path}`}/>
                 <h3>Description :</h3> {this.props.movie.overview}
              
            </>
        )
          
        
    }

}
export default Card;