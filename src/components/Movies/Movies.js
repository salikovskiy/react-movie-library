import React, { Component, Suspense } from "react";
import services from "../services/services";
import { BrowserRouter, Route, Switch, Link, Redirect } from "react-router-dom";
const HomePage = React.lazy(() => import("./HomePage/HomePage"));
const MoviesPage = React.lazy(() => import("./MoviesPage/MoviesPage"));
const MovieDetailsPage = React.lazy(() =>
  import("./MovieDetailsPage/MovieDetailsPage")
);

class Movies extends Component {
  state = {
    movies: [],
    id: null,
    movie: []
  };

  componentDidMount() {
    services.getBestOfTheDay().then(data => {
      this.setState({ movies: data.data.results });
    });
  }

  render() {
    return (
      <>
        <BrowserRouter>
          <ul>
            <Link to="/goit-fe-course-react/">Home</Link>
            <Link to="/goit-fe-course-react/movies">Movie</Link>
          </ul>
          <Switch>
            <Redirect
              from="/goit-fe-course-react/movies/:id/cast"
              to="/movies/:id"
            />
            <Redirect
              from="/goit-fe-course-react/movies/:id/reviews"
              to="/movies/:id"
            />
            <Suspense fallback={<div>Загрузка...</div>}>
              <Route path="/goit-fe-course-react/" exact>
                <HomePage exact data={this.state.movies} />
              </Route>
              <Route
                exact
                path="/goit-fe-course-react/movies"
                component={MoviesPage}
              />
              <Route
                exact
                path="/goit-fe-course-react/movies/:id"
                component={MovieDetailsPage}
              />
            </Suspense>
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}

export default Movies;
