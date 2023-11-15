import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Faq2 from "./faq2";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import "./signup.scss";
import { Box } from "@mui/material";
function Faq() {
  const [showDescription, setShowDescription] = useState(false);

  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };

  return (
    <Box className="Faqtotal">
      <Box className="total__Seperatingdiv"></Box>
      <h1 className="Faqtotal__Faqheading">Frequently Asked Questions</h1>
      <Box className="Faqtotal__onequestion">
        <Box className="Faqtotal__onequestion__firstquestion">
          <a>How can I cancel ?</a>
          <button
            className="Faqtotal__onequestion__firstquestion__plusbutton"
            onClick={toggleDescription}
          >
            <AddIcon />
          </button>
        </Box>
        {showDescription ? (
          <Box className="Faqtotal__onequestion__des">
            Netflix is flexible. There are no annoying contracts and no
            commitments. You can easily cancel your account online in two
            clicks. There are no cancellation fees – start or stop your account
            anytime.
          </Box>
        ) : null}
      </Box>
      <p></p>
      <Box className="Faqtotal__seperate"></Box>
      <Faq2 />
      <p className="navtotal1__Signupfirstpartdiv__Readytowatch">
        Ready to watch? Enter your email to create or restart your membership.
      </p>
      <input
        className="navtotal1__Signupfirstpartdiv__enteremail"
        placeholder="Email Address"
      ></input>
      <button className="Faqtotal__seperate__getstarted2">
        Get Started <ChevronRightIcon />
      </button>
      <p></p>
      <p></p>
      <Box className="total__Seperatingdiv"></Box>
    </Box>
  );
}

export default Faq;
