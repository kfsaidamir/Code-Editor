import React from "react";
import "./Header.css";
import { Box, Image } from "@chakra-ui/react";
import { FaTelegram } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";

const Header = () => {
  return (
    <Box w={"95%"} margin={"1% auto"} className="header-content">
      <Box className="header-img">
        <Link to="/home">
          <Image
            src="https://raw.githubusercontent.com/chakra-ui/chakra-ui/main/media/logo-colored@2x.png?raw=true"
            className="img-width"
          />
        </Link>
      </Box>
      <Box className="header-navigate" >
        <Link to="https://t.me/kf_saidamir" className="header-link">
          <FaTelegram fontSize={"30px"} className="header-link" />
        </Link>
        <Link to="https://www.instagram.com/kf_saidamir?igsh=MXBzMXB1Y2xjeWVraw==" className="header-link" >
          <FaInstagram fontSize={"30px"} className="header-link" />
        </Link>
      </Box>
    </Box>
  );
};

export default Header;
