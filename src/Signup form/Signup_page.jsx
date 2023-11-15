import React from "react";
import Signup_nav from "./Signup_navbar";
import Bottom_cards from "./bottom_cards";
import Faq from "./FAQ";
import "./signup.scss";
import Footerup from "../Signup form/Footer_signup";
import { Box } from "@mui/material";
function SignupPage() {
  return (
    <Box>
      <Signup_nav />
      <Bottom_cards />
      <Faq />
      <Footerup />
      {/* <Footer /> */}
    </Box>
  );
}

export default SignupPage;
