import React from "react";
import "./signup.scss";
import { Box } from "@mui/material";
import children from "../components/Images/children.png";
function Bottom_cards() {
  return (
    <Box className="total">
      <Box className="total__Seperatingdiv"></Box>
      <Box className="total__firstcard">
        <Box className="total__firstcard__text">
          <h2 className="total__firstcard__text__text1firstcard">
            Enjoy on your TV
          </h2>
          <p className="total__firstcard__text__text2firstcard">
            Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
            players and more.
          </p>
        </Box>
        <Box className="total__firstcard__firstvideo">
          <video
            data-uia="nmhp-card-animation-asset-video"
            autoplay
            playsinline
            muted
            loop
            className="total__firstcard__firstvideo__video1"
          >
            <source
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v"
              type="video/mp4"
            ></source>
          </video>
        </Box>
      </Box>
      <Box className="total__Seperatingdiv"></Box>
      <Box className="total__firstcard">
        <Box className="total__firstcard__firstvideo">
          <img
            alt
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
            data-uia="nmhp-card-animation-asset-image"
            class="default-ltr-cache-1d3w5wq"
          ></img>
        </Box>
        <Box className="total__firstcard__text">
          <h2 className="total__firstcard__text__text1firstcard">
            Download your shows to watch offline
          </h2>
          <p className="total__firstcard__text__text2firstcard">
            Save your favourites easily and always have something to watch.
          </p>
        </Box>
      </Box>
      <Box className="total__Seperatingdiv"></Box>
      <Box className="total__firstcard">
        <Box className="total__firstcard__text">
          <h2 className="total__firstcard__text__text1firstcard">
            Create profiles for kids
          </h2>
          <p className="total__firstcard__text__text2firstcard">
            Send children on adventures with their favourite characters in a
            space made just for them—free with your membership.
          </p>
        </Box>
        <Box className="total__firstcard__firstvideo">
          <img src={children} />
        </Box>
      </Box>
      {/* <Box>
    <Faq />
    <Footerup />
    </Box> */}
    </Box>
  );
}
export default Bottom_cards;
