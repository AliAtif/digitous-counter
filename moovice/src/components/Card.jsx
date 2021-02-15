
import React from "react"; 
import Popular from "./Popular";
import Favorites from "./Favorites"


class Card extends React.Component{

    render(){

        return(
            <>
                <h3>Titre: {this.props.movie.title}</h3>
                <h5>Année de sortie : {this.props.movie.release_date}</h5>
                 <img src={`https://image.tmdb.org/t/p/w300/${this.props.movie.poster_path}`}/>
                 <h3 style={{padding:10}}>Description :</h3> <p style={{padding:10, textAlign:"center"}}>{this.props.movie.overview}</p>
              
            </>
        )
          
        
    }

}
export default Card;