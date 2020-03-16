import React, { Component, Suspense } from "react";
import services from "../../services/services";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
const Reviews = React.lazy(() => import("../Reviews/Reviews"));
const Cast = React.lazy(() => import("../Cast/Cast"));
const defaultImgURL = "https://image.tmdb.org/t/p/w300/";

class MovieDetailsPage extends Component {
  state = {
    movie: [],
    reviews: [],
    actors: [],
    id: null
  };

  componentDidMount = async () => {
    await services.getDetailsById(this.props.match.params.id).then(data => {
      this.setState({ movie: data.data, id: this.props.match.params.id });
    });
    // this.props.history.push(`/movies/${this.props.location.state.id}`);
  };

  handleCast = () => {
    services.getActorsById(this.state.id).then(data => {
      this.setState({ actors: data.data });
    });
  };

  handleReviews = () => {
    services.getReviewsById(this.state.id).then(data => {
      this.setState({ reviews: data.data });
    });
  };

  render() {
    const { movie } = this.state;
    return (
      movie.length !== 0 && (
        <>
          <BrowserRouter>
            <img
              src={`${defaultImgURL}${movie.poster_path}`}
              alt="movie-posters"
            />
            <h1>{movie.original_title}</h1>
            <p>User score: {Math.round(movie.popularity)} points</p>
            <h2>Overview:</h2>
            <p>{movie.overview}</p>
            <h2>Genres:</h2>

            <ul>
              {movie.genres.length !== 0 &&
                movie.genres.map(elem => <li key={elem.id}>{elem.name}</li>)}
            </ul>
            <hr />
            <h3>Additional information</h3>
            <Link
              to={`/goit-fe-course-react/movies/${movie.id}/cast`}
              onClick={this.handleCast}
            >
              Cast
            </Link>
            <Link
              to={`/goit-fe-course-react/movies/${movie.id}/reviews`}
              onClick={this.handleReviews}
            >
              Reviews
            </Link>
            <hr />
            <Switch>
              <Suspense fallback={<div>Загрузка...</div>}>
                <Route
                  exact
                  path="/goit-fe-course-react/movies/:id/cast"
                  render={() => <Cast actors={this.state.actors} />}
                />
                <Route
                  exact
                  path="/goit-fe-course-react/movies/:id/reviews"
                  render={() => <Reviews reviews={this.state.reviews} />}
                />
              </Suspense>
            </Switch>
          </BrowserRouter>
        </>
      )
    );
  }
}

export default MovieDetailsPage;
