import React from "react";
import { useState } from "react";
import Stars from "./StarRating";

const Index = () => {
  const myMovies = [
    { Title: "The Matrix", Rating: 7.5, Category: "Action" },
    { Title: "Focus", Rating: 6.9, Category: "Comedy" },
    { Title: "The Lazarus", Rating: 6.4, Category: "Thriller" },
    { Title: "Everly", Rating: 5.0, Category: "Action" },
    { Title: "Maps to the Stars", Rating: 7.5, Category: "Drama" },
  ];

  const ratingArray = [
    { Rating: 1.0 },
    { Rating: 2.0 },
    { Rating: 3.0 },
    { Rating: 4.0 },
    { Rating: 5.0 },
    { Rating: 6.0 },
    { Rating: 7.0 },
    { Rating: 8.0 },
    { Rating: 9.0 },
    { Rating: 10.0 },
  ];
  const [searchRating, setSearchRating] = useState(ratingArray);
  const [movies, setMovies] = useState(myMovies);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [display, setDisplay] = useState("none");

  const getInputData = (val) => {
    const filtredMveList = [];
    // FILTERING DATA
    movies
      .filter((movie) =>
        movie.Title.toLocaleLowerCase().includes(val.target.value)
      )
      .map((mov) => filtredMveList.push(mov));
    setFilteredMovies(filtredMveList);
  };

  const onSelectRating = () => {
    setDisplay("");
  };

  const onSelectcheckBox = (val) => {
    setDisplay("none");
    const filterRating = [];
    movies
      .filter((movie) => movie.Rating === val)
      .map((mov) => filterRating.push(mov));
    setFilteredMovies(filterRating);
  };

  const getCategory = (val) => {
    const filterCategory = [];
    console.log("category", val);
    movies
      .filter((movie) => movie.Category === val)
      .map((mov) => filterCategory.push(mov));
    console.log("categories...", filterCategory);
    setFilteredMovies(filterCategory);
  };

  return (
    <div>
      <div class="jumbotron">
        <p style={{ fontSize: "20px", color: "orange" }}>
          Based on given data, produce a list of movies by categories with
          ability to search and filter
        </p>
        <div class="card center">
          <div class="card-body row">
            {/* SERACHING BY  INPUT  */}
            <div class="form-group col-6">
              <input
                type="text"
                class="form-control"
                placeholder="Enter movie name"
                onChange={getInputData}
              ></input>
            </div>

            {/* SEARCHING BY RATING  onClick={() => getRating(movie.Rating)} */}
            <div class="form-group col-3 ">
              <select
                class="form-select"
                placeholder="Select Rating"
                onClick={() => onSelectRating()}
                style={{
                  height: "35px",
                  borderColor: "#D5DBDB",
                  width: "100%",
                }}
                aria-label="Default select example"
              >
                <option>Select Rating</option>
              </select>
              <div>
                {searchRating.map((movie) => (
                  <div class="list" style={{ display: display }}>
                    <input
                      onClick={() => onSelectcheckBox(movie.Rating)}
                      type="checkbox"
                      value={movie}
                    />
                    <Stars movieObj={movie} />
                  </div>
                ))}
              </div>
            </div>

            {/* SEARCHING BY CATREGORY*/}
            <div class="form-group col">
              <select
                class="form-select"
                style={{ height: "35px", borderColor: "#D5DBDB" }}
                aria-label="Default select example"
              >
                <option>Select Category</option>
                {movies.map((movie) => (
                  <option
                    value={movie.Category}
                    onClick={() => getCategory(movie.Category)}
                  >
                    <input type="checkbox" checked="checked"></input>{" "}
                    {movie.Category}
                  </option>
                ))}
              </select>
            </div>
          </div>
          {/* =========LISTING MOVIES===  {movie.Rating} stars==== */}
          <div style={{ position: "relative" }} class="card-body listBody">
            {filteredMovies.map((movie) => {
              return (
                <>
                  <p>
                    {movie.Title}{" "}
                    <span style={{ color: "grey", float: "right" }}>
                      {movie.Category}
                    </span>
                  </p>
                  <Stars movieObj={movie} />
                </>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Index;
