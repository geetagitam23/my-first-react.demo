import React, { useState } from 'react';

const moviesData = [
  { id: 1, title: 'Movie 1', releaseYear: 2020 },
  { id: 2, title: 'Movie 2', releaseYear: 2019 },
  { id: 3, title: 'Movie 3', releaseYear: 2021 },
  // Add more movie objects here
];

function MovieLibrary() {
  const [movies, setMovies] = useState(moviesData);
  const [sortBy, setSortBy] = useState('title'); // Default sorting by title
  const [filterYear, setFilterYear] = useState('');

  // Function to handle sorting
  const handleSort = (event) => {
    setSortBy(event.target.value);
  };

  // Function to handle filtering by release year
  const handleFilter = (event) => {
    setFilterYear(event.target.value);
  };

  // Apply sorting and filtering to movies
  let filteredMovies = [...movies];

  if (filterYear) {
    filteredMovies = filteredMovies.filter(
      (movie) => movie.releaseYear === parseInt(filterYear)
    );
  }

  filteredMovies.sort((a, b) => {
    if (sortBy === 'title') {
      return a.title.localeCompare(b.title);
    } else if (sortBy === 'releaseYear') {
      return a.releaseYear - b.releaseYear;
    }
    return 0;
  });

  return (
    <div>
      <h1>Movie Library</h1>
      <div>
        <label htmlFor="sort">Sort By:</label>
        <select id="sort" onChange={handleSort} value={sortBy}>
          <option value="title">Title</option>
          <option value="releaseYear">Release Year</option>
        </select>
      </div>
      <div>
        <label htmlFor="filter">Filter By Year:</label>
        <input
          type="number"
          id="filter"
          placeholder="Filter by year"
          value={filterYear}
          onChange={handleFilter}
        />
      </div>
      <ul>
        {filteredMovies.map((movie) => (
          <li key={movie.id}>
            {movie.title} ({movie.releaseYear})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MovieLibrary;
