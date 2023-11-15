import React from "react";
import Header from "../header/header";
import "../Search.jsx/Search.scss";
import { Box } from "@mui/material";
function Search({ setSearchValue, movielist, entered }) {
  const filteredMovies = movielist.filter((each) =>
    each.title.toLowerCase().includes(entered.toLowerCase())
  );

  return (
    <Box className="totaldiv">
      <Box className="totaldiv__Header_div">
        <Header setSearchValue={setSearchValue} />
      </Box>
      <Box className="totaldiv__searchcard_div">
        {filteredMovies.map((f, index) => (
          <Box key={index} className="totaldiv__searchcard_div__innerdiv">
            <img
              src={f.poster}
              alt={f.title}
              className="totaldiv__searchcard_div__innerdiv__search_img"
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default Search;
