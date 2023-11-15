import React, { createContext, useContext, useState } from "react";
import "./signup.scss";
import TranslateIcon from "@mui/icons-material/Translate";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useNavigate } from "react-router-dom";
import { Box ,Stack, TextField,Button, Typography} from "@mui/material";
import { emailset } from "../App";
function Signup_nav() {
  const navigate = useNavigate();
  const [email, setEmail] = useContext(emailset);
  return (
    <Box className="navtotal1">
      <Box className="navtotal1__Signupfirstpartdiv">
        <Box className="navtotal1__Signupfirstpartdiv__navbar">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
            alt="Netflix"
            className="navtotal1__Signupfirstpartdiv__navbar__logoimg"
          />
          <Stack className="navtotal1__Signupfirstpartdiv__navbar__English" direction="row">
            <TranslateIcon style={{ fontSize:22 }}/>
            <a className="navtotal1__Signupfirstpartdiv__navbar__English__text">
              English
            </a>
            <ArrowDropDownIcon style={{ fontSize:22 }}/>
          </Stack>
          <button
            className="navtotal1__Signupfirstpartdiv__navbar__signinbutton1"
            onClick={() => navigate("/")}
          >
            Sign In
          </button>
        </Box>
        <h1 className="navtotal1__Signupfirstpartdiv__unlimited">
          Unlimited movies, Tv shows and more
        </h1>
        <h3 className="navtotal1__Signupfirstpartdiv__Watchanywhere">
          Watch Anywhere. Cancel anytime
        </h3>
        <p className="navtotal1__Signupfirstpartdiv__Readytowatch">
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <Stack direction="row" justifyContent="center">
        <TextField
          className="navtotal1__Signupfirstpartdiv__enteremail"
          label="Email Address"
          onChange={(e) => setEmail(e.target.value)}
          color="error"
          InputLabelProps={{style:{color:"white"}}}
          InputProps={{style:{color:"white"}}}
          
        />

        <Button
          className="navtotal1__Signupfirstpartdiv__getstarted"
          onClick={() => navigate("/form")}
          style={{background:"red",color:"white",height:"4vw",marginLeft:"2vw"}}
        >
         
          <Typography className="navtotal1__Signupfirstpartdiv__getstarted__writeup" variant="body">
            Get Started
          </Typography>
          <a>
            <ChevronRightIcon className="navtotal1__Signupfirstpartdiv__getstarted__arrow" />
          </a>
        </Button>
        </Stack>
      </Box>

      <p></p>
    </Box>
  );
}
export default Signup_nav;
