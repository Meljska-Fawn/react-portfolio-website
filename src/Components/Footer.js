import React from 'react';
import { GitHubIcon, LinkedInIcon, InstagramIcon } from '@mui/icons-material';

function Footer() {
  return (
    <div>
      <div>
        <span>
          <a href="https://github.com/Meljska-Fawn"><GitHubIcon fontSize="large"/></a>
        </span>
        <span>
          <a href="https://www.linkedin.com/in/melissa-vaughn-663b35226/">
            <LinkedInIcon fontSize="large"/>
          </a>
        </span>
        <span>
          <a href="https://www.instagram.com/melissa.lavaughn/">
            <InstagramIcon fontSize="large"/>
          </a>
        </span>
      </div>
    </div>
  );
}

export default Footer;