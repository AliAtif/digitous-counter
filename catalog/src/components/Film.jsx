
import React from "react";
import movies from "./movies";

class Film extends React.Component {
  render() {
    return (
      <>
        {movies
          .filter((movie) => {
            //return movie.id == this.props.match.params.id;
            return movie.id === parseInt(this.props.match.params.id);
          })
          .map((movie) => {
            return (
              <>
                <h2>Titre: {movie.title}</h2>
                <img src={movie.image} alt={`l'affiche de ${movie.title}`} />
                <h3>Directeur: {movie.director}</h3>
                <h3>Acteurs: {movie.stars.map((star) => {
                    return <p>{star}</p>;
                })}</h3>
                <h4 className="description">Description: {movie.description}</h4>
              </>
            );
          })}
      </>
    );
  }
}

export default Film;