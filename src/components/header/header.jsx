import React, { useEffect, useState } from "react";
import "../../components/style.scss";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
function Header({ setSearchValue }) {
  const onInputChange = (e) => {
    e.preventDefault();
    setSearchValue(e.target.value);
    console.log("Input value:", e.target.value);
  };
  const navigate = useNavigate();
  const [scroll, setscroll] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const Navbar = () => {
    console.log("yay", setscroll);
    if (window.scrollY >= 10) {
      setscroll(true);
    } else {
      setscroll(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", Navbar);
  });
  const handleSearchIconClick = () => {
    setIsSearchOpen(!isSearchOpen);
  };
  return (
    <header className={scroll ? "header" : "header_active"}>
      <Box className="header_logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          alt="Netflix Logo"
        />
      </Box>
      <Box className="header_links">
        <a href="/home">Home</a>
        <a href="/characters">Characters</a>
        <a href="/movies">Movies</a>
        <a href="/new-releases">New Releases</a>
        <a href="/mylist" onClick={() => navigate("/mylist")}>
          My List
        </a>
      </Box>
      <Box
        className={`header_icons ${
          isSearchOpen ? "search-open" : "search-open"
        }`}
      >
        {isSearchOpen ? (
          <input
            className="header_inputsearch"
            onClick={() => navigate("/search")}
            onChange={onInputChange}
          />
        ) : (
          <Box>
            <SearchIcon onClick={handleSearchIconClick} />
          </Box>
        )}
      </Box>
      <Box className="header_onlyicons">
        <Box className="header_notification">
          <NotificationsNoneIcon />
        </Box>
        <Box className="header_profile">
          <img
            src="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg"
            alt="User Profile"
          />
        </Box>

        <Box className="header_profile_dropdown">
          <ArrowDropDownIcon />
          <Box className="Options">
            <Box component="span" className="span">
              Settings
            </Box>
            <Box
              component="span"
              className="span"
              onClick={() => navigate("/")}
            >
              Logout
            </Box>
          </Box>
        </Box>
      </Box>
    </header>
  );
}

export default Header;
