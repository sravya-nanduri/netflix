import React from "react";
import "./SignInPage.scss";
import { Box } from "@mui/material";
function Footer() {
  return (
    <Box className="signin_footer">
      <Box className="signin_footer__signin_question">
        <a>Questions? Call 8639086987</a>
      </Box>
      <Box className="signin_footer__second_div">
        <a href="#" className="signin_footer__second_div__faq">
          FAQ?
        </a>
        <br></br>
        <a href="#" className="signin_footer__second_div__faq">
          Help center
        </a>
        <br></br>
        <a href="#" className="signin_footer__second_div__faq">
          Terms of use
        </a>
        <br></br>
        <a href="#" className="signin_footer__second_div__faq">
          Privacy
        </a>
      </Box>
      <Box className="signin_footer__third_div">
        <a href="#" className="signin_footer__third_div__signin_cookie">
          Cookie Preferences
        </a>
        <br></br>
        <a href="#" className="signin_footer__third_div__signin_cookie">
          Coorperate Information
        </a>
      </Box>
    </Box>
  );
}
export default Footer;
