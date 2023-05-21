import React from 'react';
import { Container } from "@mui/system";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

const Footer = () => {
  return (
    <AppBar>
      <Container>
        <Toolbar>
          <a href="https://github.com/Meljska-Fawn"><GitHubIcon fontSize="large"/></a>
          <a href="https://www.linkedin.com/in/melissa-vaughn-663b35226/">
            <LinkedInIcon fontSize="large"/>
          </a>
          <a href="https://www.instagram.com/melissa.lavaughn/">
            <InstagramIcon fontSize="large"/>
          </a>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Footer;