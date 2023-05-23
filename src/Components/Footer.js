import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Copyright() {
  return (
    <div className="text-secondary">
      {'Copyright © '}
      Melissa Vaughn
      {' '}
      {new Date().getFullYear()}
    </div>
  );
}

export default function Footer() {
  return (
    <Container className="d-flex align-items-center justify-content-center">
      <Row>
        <Col >
          <a href="https://github.com/Meljska-Fawn">
            <GitHubIcon fontSize="large" />
          </a>
          <a href="https://www.linkedin.com/in/melissa-vaughn-663b35226/">
            <LinkedInIcon fontSize="large" />
          </a>
          <a href="https://www.instagram.com/melissa.lavaughn/">
            <InstagramIcon fontSize="large" />
          </a>
        </Col>
        <Col style={{ maxWidth: '600px' }}>
          <Copyright />
        </Col>
      </Row>
    </Container>
  );
}