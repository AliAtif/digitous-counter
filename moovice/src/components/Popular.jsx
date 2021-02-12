
import React from "react";
import Card from "./Card";
import PopularBattle from "./PopularBattle"


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
                
            	.then(films => {
                     console.log(films.results);
		        this.setState({ filmsList : films.results});
	})
	.catch(error => console.error(error));
    }

    render(){

        return(

            <div className="container-fluid d-flex justify-content-center">
                <div className="row d-flex justify-content-center">
                    <div className="col-12 justify-content-center">
                     <h3>Popular</h3>
                         {this.state.filmsList.map((film)=>{
                              return(
                         <Card movie={film} ></Card>
                         )
                      })}
                    </div>  
                </div>      
   
            </div>
        )
    }

}
export default Popular;

