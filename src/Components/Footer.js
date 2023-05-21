import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
        Melissa Vaughn
      {' '}
      {new Date().getFullYear()}
    </Typography>
  );
}

const defaultTheme = createTheme();

export default function Footer() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
        }}
      >
        <CssBaseline />
        <Box
          component="footer"
          sx={{
            py: 3,
            px: 2,
            mt: 'auto',
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[200]
                : theme.palette.grey[800],
          }}
        >
          <Container maxWidth="lg" align="center">
            <a href="https://github.com/Meljska-Fawn">
              <GitHubIcon fontSize="large" />
            </a>
            <a href="https://www.linkedin.com/in/melissa-vaughn-663b35226/">
              <LinkedInIcon fontSize="large" />
            </a>
            <a href="https://www.instagram.com/melissa.lavaughn/">
              <InstagramIcon fontSize="large" />
            </a>
            <Copyright />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}