import React from "react";
import kungfutext from "../Images/kungfutext.png";
import Playbutton from "../Playbutton/playbutton";
import { Box } from "@mui/material";
const MovieBanner = () => (
  <Box className="movie-banner">
    <img src={kungfutext} alt="no" className="movie-banner_img" />
    <Box component="span" className="movie-banner_description">
      Sherlock is a British mystery crime drama television series based on Sir
      Arthur Conan Doyle's Sherlock Holmes detective stories. Created by Steven
      Moffat and Mark Gatiss, it stars Benedict Cumberbatch as Sherlock Holmes
      and Martin Freeman as Doctor John Watson.{" "}
    </Box>
    <Playbutton />
  </Box>
);

export default MovieBanner;
