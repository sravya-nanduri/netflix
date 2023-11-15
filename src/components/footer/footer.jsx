import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import "../../components/style.scss";
import { Box } from "@mui/material";
function Footer() {
  return (
    <footer className="footer">
      <Box className="footer_social">
        <FaFacebook className="footer_icon" />
        <FaTwitter className="footer_icon" />
        <FaInstagram className="footer_icon" />
        <FaYoutube className="footer_icon" />
      </Box>
      <Box className="footer_links">
        <a href="/faq">FAQ</a>
        <a href="/help">Help Center</a>
        <a href="/terms">Terms of Use</a>
        <a href="/privacy">Privacy</a>
      </Box>
      <Box className="footer_service">
        <a href="/cookie">Cookie Preferences</a>
      </Box>
      <Box className="footer_corp">
        <p>&copy; 2023 Netflix</p>
      </Box>
    </footer>
  );
}

export default Footer;
