import React from "react";
import Mylist from "./Watch_list";
import Header from "../header/header";
import "./Watch_list.scss";
import { Box } from "@mui/material";
function View({ watchlist1, removeFromWatchlist }) {
  return (
    <Box className="yay">
      <Header classname="headerwatch" />
      <Box>
        <Mylist
          watchlist1={watchlist1}
          removeFromWatchlist={removeFromWatchlist}
          className="totalclass"
        />
      </Box>
    </Box>
  );
}
export default View;
