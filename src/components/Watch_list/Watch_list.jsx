import React, { useEffect, useState } from "react";
import "./Watch_list.scss";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import ControlPointOutlinedIcon from "@mui/icons-material/ControlPointOutlined";
import ThumbUpOffAltOutlinedIcon from "@mui/icons-material/ThumbUpOffAltOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { Box } from "@mui/material";
function WatchList({ watchlist1, removeFromWatchlist }) {
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    console.log("Watchlist updated:", watchlist1);
  }, [watchlist1]);
  const isliked = true;
  const handleRemoveClick = (movie) => {
    removeFromWatchlist(movie);
  };

  return (
    <Box className="total">
      {watchlist1.map((movie) => (
        <Box
          className={`total__card-container1`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Box key={movie.id} className="total__card-container1__full">
            <Box className="total__card-container1__full__indcard1">
              <img
                src={movie.poster}
                alt="nooo"
                className="total__card-container1__full__indcard1__movie_img1"
              />
            </Box>
            {isHovered ? (
              <Box className="total__card-container1__full__hover-content1">
                <button className="total__card-container1__full__hover-content1__card_playbutton1">
                  <PlayArrowIcon />
                </button>
                <button
                  className="total__card-container1__full__hover-content1__card_addlist1"
                  onClick={() => handleRemoveClick(movie)}
                >
                  {isliked ? (
                    <CheckCircleOutlineIcon />
                  ) : (
                    <ControlPointOutlinedIcon />
                  )}
                </button>

                <button className="total__card-container1__full__hover-content1__card_like1">
                  <ThumbUpOffAltOutlinedIcon />
                </button>
                <button className="total__card-container1__full__hover-content1__card_dropdown1">
                  <KeyboardArrowDownOutlinedIcon />
                </button>

                <p className="total__card-container1__full__hover-content1__card_Match1">
                  {movie.match}
                </p>
                <ul className="total__card-container1__full__hover-content1__unordered1">
                  <li className="total__card-container1__full__hover-content1__unordered1__card_duration1">
                    {movie.duration}
                  </li>
                  <li className="total__card-container1__full__hover-content1__unordered1__card_UA1">
                    {movie.rating}
                  </li>
                  <li className="total__card-container1__full__hover-content1__unordered1__card_UA1">
                    {movie.resolution}
                  </li>
                  <li className="total__card-container1__full__hover-content1__unordered1__rating1">
                    U
                  </li>
                </ul>
              </Box>
            ) : null}
          </Box>
        </Box>
      ))}
    </Box>
  );
}

export default WatchList;
