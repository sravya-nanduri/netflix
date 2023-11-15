import React from "react";
import "../../components/style.scss";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { Box } from "@mui/material";
const Playbutton = () => {
  return (
    <Box className="Playbutton">
      <button className="Playbutton_play">
        <PlayArrowIcon className="Playbutton_play__icon" style={{ fontSize:22 }}/>
        <span>Play</span>
      </button>
      <button className="Playbutton_moreinfo">
        <InfoOutlinedIcon className="Playbutton_moreinfo__icon" style={{ fontSize:22 }}/>
        <span>Info</span>
      </button>
    </Box>
  );
};
export default Playbutton;
