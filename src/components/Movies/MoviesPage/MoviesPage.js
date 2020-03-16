import React, { Component } from "react";
import services from "../../services/services";
import { Link } from "react-router-dom";

class MoviesPage extends Component {
  state = {
    query: "",
    movies: []
  };

  hadleSubmit = e => {
    e.preventDefault();
    console.log(this.props.history.location.pathname);
    this.props.history.push(`?query=${this.state.query}`);
    services
      .searchData(this.state.query)
      .then(data => this.setState({ movies: data.data }));
  };

  hadleChange = e => {
    const x = e.target.value;
    this.setState({ query: x });
  };

  render() {
    return (
      <>
        <form onSubmit={this.hadleSubmit}>
          <input type="search" onChange={this.hadleChange} />
          <button type="submit">Search</button>
        </form>
        {this.state.movies.length !== 0 ? (
          <>
            {this.state.movies.results.map(elem => (
              <Link
                key={elem.id}
                to={{
                  pathname: `/goit-fe-course-react/movies/${elem.id}`,
                  state: { id: elem.id }
                }}
              >
                {elem.original_title}
              </Link>
            ))}
          </>
        ) : (
          ""
        )}
      </>
    );
  }
}

export default MoviesPage;
