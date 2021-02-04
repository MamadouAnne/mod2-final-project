import Like from "./common/like";

const MoviesTable = (props) => {
  const { movies, onDelete, onLike } = props;
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Genre</th>
          <th>Stock</th>
          <th>Rate</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {movies.map((movie) => (
          <tr key={movie._id}>
            <td>{movie.title}</td>
            <td>{movie.genre.name}</td>
            <td>{movie.numberInStock}</td>
            <td>{movie.dailyRentalRate}</td>
            <td>
              <Like liked={movie.liked} onClick={() => onLike(movie)} />
            </td>
            {/* in order to pass an argument(movie we to use an arrow function) */}
            <td
              onClick={() => onDelete(movie)}
              className="btn btn-danger btn-sm"
            >
              delete
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MoviesTable;
