import React from "react";
import SignUpForm from "./form";
import "./signup.scss";
import TranslateIcon from "@mui/icons-material/Translate";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";

function TotalSignup_form() {
  const navigate = useNavigate();
  return (
    <Box className="formfirst">
      <Box className="formfirst__formtotal">
        <Box className="formfirst__formtotal__navbardiv">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
            alt="Netflix"
            className="formfirst__formtotal__navbardiv__logoimg"
          />
          <button className="formfirst__formtotal__navbardiv__English">
            <TranslateIcon />
            <a className="formfirst__formtotal__navbardiv__English__text">
              English{" "}
            </a>
            <ArrowDropDownIcon />
          </button>
          <button
            className="formfirst__formtotal__navbardiv__signinbutton1"
            onClick={() => navigate("/")}
          >
            Sign In
          </button>
        </Box>
        <Box className="formfirst__formtotal__signupfields">
          <h2>Create a password to start your membership</h2>
          <p>Just a few more steps and you're done! We hate paperwork, too.</p>
          <br />
          <SignUpForm />
        </Box>
      </Box>
    </Box>
  );
}

export default TotalSignup_form;
