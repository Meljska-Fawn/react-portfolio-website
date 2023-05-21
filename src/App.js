import React from 'react';
import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import PortfolioContainer from "./Components/PortfolioContainer";

function App() {
  return (
    <div>
      <Container maxWidth="lg" sx={{ marginTop: 2 }}>
        <Grid container spacing={5} alignItems="center">
          <Grid item xs>
            <Header />
          </Grid>
          <Grid item xs={8}>
            <PortfolioContainer />
          </Grid>
          <Grid item xs>
            <Footer />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
