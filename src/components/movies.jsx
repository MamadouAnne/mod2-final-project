import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import MoviesTable from "./moviesTable";
import Pagination from "./common/pagination";
import { paginate } from "../utils/paginate";
import ListGroup from "./common/listGroup";

class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    pageSize: 4,
    currentPage: 1, // we need to know the current page so we can highlight it when the user click on it.
  };

  componentDidMount() {
    //no need to initialize because allGenre does not exist in our database.
    const genres = [{ name: "All Genre" }, ...getGenres()];
    this.setState({ movies: getMovies(), genres });
    //this.setState({ movies: getMovies(), genres: getGenres() });
  }
  // delete method: mapping m if new movie m_id is different movies_id
  // we will change to the state and movies
  handleDelete = (movie) => {
    const movies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({ movies });
    // this.setState({movies: movies});
    console.log(movie);
  };
  handleLike = (movie) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
    console.log("movie liked");
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
    //console.log(page);
  };

  handleSelectedGenre = (genre) => {
    this.setState({ selectedGenre: genre, currentPage: 1 });
    console.log(genre);
  };

  render() {
    const {
      pageSize,
      currentPage,
      movies: allMovies,
      selectedGenre,
    } = this.state;
    // showing number of movies left in database( this.state.movies === 0 )
    // we used object destructuring for the property length
    const { length: count } = this.state.movies;
    // if there no more movies we will display this message
    if (count === 0) return <h3>There are no more movies left in database</h3>;
    // filtering movies based on selectedGenre
    const filtered =
      selectedGenre && selectedGenre._id
        ? allMovies.filter((m) => m.genre._id === selectedGenre._id)
        : allMovies;
    //pagination
    const movies = paginate(filtered, currentPage, pageSize);

    return (
      // showing the number of movies
      <div className="row header">
        <div className="col-3">
          <ListGroup
            style={{ marginTop: 100 }}
            items={this.state.genres}
            selectedItem={this.state.selectedGenre}
            // instead of targeting name and value in our list we can make it more
            // flexible so we can work with any kind of object. reusable list group.
            //but instead of setting the properties here we can set it as default values
            // in our list group function
            // textProperty="name"
            // valueProperty="_id"
            onItemSelect={this.handleSelectedGenre}
          />
        </div>
        <div className="col">
          <p>Showing {filtered.length} movies left in the database</p>
          <MoviesTable
            movies={movies}
            onDelete={this.handleDelete}
            onLike={this.handleLike}
          />
          {/* to avoid pagination errors we are goin to the
        install pro-types@15.6.2 this is a type checker. */}
          <Pagination
            // itemsCount="abc" => index.js:1 Warning: Failed prop type: Invalid prop `itemsCount` of type `string`
            itemsCount={filtered.length} // all filtered items
            //itemsCount={count} // all movies
            pageSize={pageSize}
            onPageChange={this.handlePageChange}
            currentPage={currentPage}
          />
        </div>
      </div>
    );
  }
}

export default Movies;
