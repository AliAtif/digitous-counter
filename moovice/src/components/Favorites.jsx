


import React from "react";
 


class Favorites extends React.Component{

    constructor(){
        super();
        this.state={

            movies: [],
            favIDs: "",
        }
    }


    getStorage(){

    }

    getMovie(id){
        // fetch("http://api.themoviedb.org/3/movie/{ID}?api_key=e39d71e9bd32c85990dcdff0b40c96e2")

    } 

    render(){

        return(
            <h3>Favorites</h3>
        )
    }

}
export default Favorites;