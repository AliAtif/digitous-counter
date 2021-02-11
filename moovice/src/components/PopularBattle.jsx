


import React from "react";
import Card from "./Card"
import Popular from "./Popular";


class PopularBattle extends React.Component{

    constructor(){
        super();
        this.state = {
            filmsList: [],
            currentBattle: 0,
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

    buttonClick=(n)=>{
       let num= n+2;
       this.setState({currentBattle: num})
    }

    render(){

        return(

            <>
                <h1>PopularBattle</h1>
                {this.state.filmsList.slice(this.state.currentBattle, this.state.currentBattle+2).map((film)=>{
                    return(
                        <button onClick={()=>this.buttonClick(this.state.currentBattle)}> <Card movie={film}></Card></button>
                   
                    )
                })}
   
            </>
        )
    }


}
export default PopularBattle;