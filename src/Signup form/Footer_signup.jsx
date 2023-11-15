import React from "react";
import "../Signup form/signup.scss";
import TranslateIcon from "@mui/icons-material/Translate";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Box } from "@mui/material";
function Footerup() {
  return (
    <Box className="signup_footer">
      <Box className="signup_footer__signup_question">
        <a>Questions? Call 8639086987</a>
      </Box>
      <Box className="signup_footer__second_div">
        <a href="#" className="signup_footer__second_div__faq">
          FAQ?
        </a>
        <br></br>
        <a href="#" className="signup_footer__second_div__faq">
          Help center
        </a>
        <br></br>
        <a href="#" className="signup_footer__second_div__faq">
          Terms of use
        </a>
        <br></br>
        <a href="#" className="signup_footer__second_div__faq">
          Privacy
        </a>
      </Box>
      <Box className="signup_footer__third_div">
        <a href="#" className="signup_footer__third_div__signin_cookie">
          Cookie Preferences
        </a>
        <br></br>
        <a href="#" className="signup_footer__third_div__signin_cookie">
          Coorperate Information
        </a>
      </Box>
      <button className="signup_footer__English">
        <TranslateIcon />
        <a className="signup_footer__English__text">English </a>
        <ArrowDropDownIcon />
      </button>
      <p className="signup_footer__NetflixIndia">Netflix India</p>
    </Box>
  );
}
export default Footerup;
