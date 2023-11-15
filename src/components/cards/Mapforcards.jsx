import React from "react";
import Card from "./card";
import { createContext } from "react";
import { Box } from "@mui/material";
export const UserContext = createContext();
function Map({ y, watchlist, addToWatchlist, removeFromWatchlist }) {
  return (
    <UserContext.Provider value={y}>
      <Box className="cards">
        {y.map((movie, index) => (
          <Card
            key={movie.id}
            r={movie}
            ind={index}
            watchlist={watchlist}
            addToWatchlist={addToWatchlist}
            removeFromWatchlist={removeFromWatchlist}
          />
        ))}
      </Box>
    </UserContext.Provider>
  );
}
export default Map;
