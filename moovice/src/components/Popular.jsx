
import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom"; 
import Card from "./Card"


class Popular extends React.Component{

    constructor(){
        super();
        this.state = {
            filmsList: [],
        }

    }

    componentDidMount(){
        fetch("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=e39d71e9bd32c85990dcdff0b40c96e2")
	            .then(res => res.json())
                //   console.log(res);
            	.then(films => {
                     console.log(films.results);
		        this.setState({ filmsList : films.results});
	})
	// .catch(error => console.error(error));
    }

    render(){

        return(

            <>
                <h1>Popular</h1>
                {this.state.filmsList.map((film, index)=>{
                    <Card movie={film, [index]}></Card>
                })}

                
            </>

           
        )
    }

}
export default Popular;