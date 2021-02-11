import React from "react";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import "./App.css";
import Film from "./components/Film";
import movies from "./components/movies";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <nav class="navbar navbar-light bg-light">
          <div class="container-fluid">
            {movies.map((movie) => {
              return (
                <span class="navbar-brand mb-0 h1">
                  <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
                </span>
              );
            })}
          </div>
        </nav>

        <Switch>
          <Route
            path="/movie/:id"
            render={(props) => {
              return <Film {...props} />;
            }}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}
export default App;