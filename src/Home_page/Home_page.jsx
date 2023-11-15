import React, { useContext } from "react";
import Header from "../components/header/header";
import Cards from "../components/cards/cards";
import MovieBanner from "../components/MovieBanner/MovieBanner";
import Footer from "../components/footer/footer";
import { Usercontext } from "../App";
import { Box } from "@mui/material";
function Home_page({ name, watchlist, addToWatchlist, removeFromWatchlist }) {
  const movies = useContext(Usercontext);
  console.log(movies);
  const recentlyAdded = movies.filter(
    (movie) => movie.type === "recently added"
  );
  const Action = movies.filter((movie) => movie.type === "Action");
  const everyonesWatching = movies;
  console.log("recently added", recentlyAdded);
  return (
    <Box className="body">
      <Header yes={name} />
      <MovieBanner />
      <p></p>

      <h3 className="categories">Recently Added</h3>
      <Cards
        watchlist={watchlist}
        addToWatchlist={addToWatchlist}
        movies={recentlyAdded}
        removeFromWatchlist={removeFromWatchlist}
      />

      <h3 className="categories">Action</h3>
      <Cards
        watchlist={watchlist}
        addToWatchlist={addToWatchlist}
        movies={Action}
        removeFromWatchlist={removeFromWatchlist}
      />

      <h3 className="categories">Everyone's Watching</h3>
      <Cards
        watchlist={watchlist}
        addToWatchlist={addToWatchlist}
        movies={everyonesWatching}
        removeFromWatchlist={removeFromWatchlist}
      />

      <Footer />
    </Box>
  );
}

export default Home_page;
