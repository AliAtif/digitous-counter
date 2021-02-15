


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

    buttonClick=(n, idMovie)=>{
       let num= n+2;
       this.setState({currentBattle: num}); 
 
    }

    render(){
        if (this.state.filmsList.length === this.state.currentBattle)
        return <h3 style={{textAlign:"center"}}>Vous avez parcouru tous les films</h3>;

        return(

            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        {/* <h3>PopularBattle</h3> */}
                            {this.state.filmsList.slice(this.state.currentBattle, this.state.currentBattle+2).map((film)=>{
                                return(
                                 <button onClick={()=>this.buttonClick(this.state.currentBattle)
                            
                                    } style={{width: "100%"}}> <Card movie={film}></Card></button>
                     
                                )
                                
                             })}
                    </div>         
                </div>
            </div>
        )
    }


}
export default PopularBattle;