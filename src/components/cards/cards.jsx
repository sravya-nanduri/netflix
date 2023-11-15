import React, { useState } from "react";
import Map from "./Mapforcards";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Box } from "@mui/material";
const Cards = ({
  movies,
  setAllMovies,
  watchlist,
  addToWatchlist,
  removeFromWatchlist,
}) => {
  const [startIndex, setStartIndex] = useState(0);
  const handlePrev = () => {
    setStartIndex((prevIndex) => Math.max(0, prevIndex - 6));
  };

  const handleNext = () => {
    setStartIndex((prevIndex) => Math.min(movies.length - 6, prevIndex + 6));
  };

  return (
    <Box className="carousel-container">
      <ArrowBackIosIcon className="sliderArrow left" onClick={handlePrev} />
      <ArrowForwardIosIcon className="sliderArrow right" onClick={handleNext} />
      <Map
        y={movies.slice(startIndex, startIndex + 6)}
        setAllMovies={setAllMovies}
        watchlist={watchlist}
        addToWatchlist={addToWatchlist}
        removeFromWatchlist={removeFromWatchlist}
      />
    </Box>
  );
};

export default Cards;
