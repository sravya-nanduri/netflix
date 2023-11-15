import React, { useState } from "react";
import "../style.scss";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import ControlPointOutlinedIcon from "@mui/icons-material/ControlPointOutlined";
import ThumbUpOffAltOutlinedIcon from "@mui/icons-material/ThumbUpOffAltOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import {
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  Button,
  colors,
} from "@mui/material";
import Playbutton from "../Playbutton/playbutton";

const Card = ({ r, watchlist, addToWatchlist, removeFromWatchlist }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [ishovered2, setishovered2] = useState(false);
  const [disliked, setdisliked] = useState(false);
  const [isliked1, setisliked1] = useState(false);
  const [isliked2, setisliked2] = useState(false);
  const [likeIcon, setLikeIcon] = useState(<ThumbUpOffAltOutlinedIcon />);
  const [showModal, setShowModal] = useState(false);

  const isliked = watchlist.some((movie) => movie.id === r.id);
  const handleAddToWatchlist = () => {
    if (isliked == true) {
      removeFromWatchlist(r);
    } else {
      addToWatchlist(r);
    }
  };
  const handledisliked = () => {
    setdisliked(!disliked);
    setisliked1(false);
    setisliked2(false);
    setLikeIcon(
      disliked ? <ThumbUpOffAltOutlinedIcon /> : <ThumbDownAltIcon />
    );
  };
  const handleisliked1 = () => {
    setdisliked(false);
    setisliked1(!isliked1);
    setisliked2(false);
    setLikeIcon(isliked1 ? <ThumbUpOffAltOutlinedIcon /> : <ThumbUpIcon />);
  };
  const handleisliked2 = () => {
    setdisliked(false);
    setisliked1(false);
    setisliked2(!isliked2);
    setLikeIcon(isliked2 ? <FavoriteBorderIcon /> : <FavoriteIcon />);
  };

  const handlePlayButtonClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <Box
      className={`card-container`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Box className="indcard">
        <img src={r.poster} alt="nooo" className="movie_img" />
      </Box>
      {isHovered ? (
        <Box className="hover-content">
          <button className="card_playbutton" onClick={handlePlayButtonClick}>
            <PlayArrowIcon />
          </button>
          <Dialog
            open={showModal}
            onClose={handleCloseModal}
            className="Dialogbox"
          >
            <DialogTitle style={{ background: "black", color: "white" }}>
              {r.title}
            </DialogTitle>
            <DialogContent
              style={{ height: "1200px", background: "black", color: "white" }}
            >
              <img
                src={r.character}
                alt={r.title}
                style={{ width: "80%", height: "60%" }}
              />
              <Playbutton />
              <p>{r.description}</p>
              <Button onClick={handleCloseModal}>Close</Button>
            </DialogContent>
          </Dialog>
          <button className="card_addlist" onClick={handleAddToWatchlist}>
            {isliked ? (
              <CheckCircleOutlineIcon />
            ) : (
              <ControlPointOutlinedIcon />
            )}
          </button>
          <button
            className="card_like"
            onMouseEnter={() => setishovered2(true)}
            onMouseLeave={() => setishovered2(false)}
          >
            {likeIcon}
            {ishovered2 ? (
              <Box className="card_like__moreoptions">
                {disliked ? (
                  <ThumbDownAltIcon onClick={handledisliked} />
                ) : (
                  <ThumbDownOffAltIcon onClick={handledisliked} />
                )}
                {isliked1 ? (
                  <ThumbUpIcon onClick={handleisliked1} />
                ) : (
                  <ThumbUpOffAltOutlinedIcon onClick={handleisliked1} />
                )}
                {isliked2 ? (
                  <FavoriteIcon onClick={handleisliked2} />
                ) : (
                  <FavoriteBorderIcon onClick={handleisliked2} />
                )}
              </Box>
            ) : null}
          </button>
          <button className="card_dropdown">
            <KeyboardArrowDownOutlinedIcon />
          </button>

          <p className="card_Match">{r.match}</p>
          <ul className="unordered">
            <li className="card_duration">{r.duration}</li>
            <li className="card_UA">{r.rating}</li>
            <li className="card_UA">{r.resolution}</li>
            <li className="rating">U</li>
          </ul>
        </Box>
      ) : null}
    </Box>
  );
};

export default Card;
