import React, { useState } from 'react';
import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import Header from "./Header";
import Footer from "./Footer";
import NavTabs from './NavTabs';
import Resume from './pages/Resume';
import About from './pages/About';
import Work from './pages/Work';
import Contact from './pages/Contact';

export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('About');

    const renderPage = () => {
        if (currentPage === 'About') {
            return <About />;
        }
        if (currentPage === 'Work') {
            return <Work />;
        }
        if (currentPage === 'Resume') {
            return <Resume />;
        }
        return <Contact />;
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            <Container maxWidth="lg" sx={{ marginTop: 2 }}>
                <Grid container spacing={5} alignItems="center">
                    <Grid item xs>
                        <Header />
                    </Grid>
                    <Grid item xs={8}>
                        {renderPage()}
                    </Grid>
                    <Grid item xs>
                        <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
                    </Grid>
                </Grid>
                <Footer />
            </Container>
        </div>
    );
}