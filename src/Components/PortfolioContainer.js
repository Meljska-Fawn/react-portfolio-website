import React, { useState } from 'react';
import Header from "./Header";
import Footer from "./Footer";
import NavTabs from './NavTabs';
import Resume from './pages/Resume';
import About from './pages/About';
import Work from './pages/Work';
import Contact from './pages/Contact';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
            <Container>
                <Row>
                    <Col xs={12} md={8}>
                        <Header />
                    </Col>
                    <Col xs={6} md={4}>
                        <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        {renderPage()}
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <Footer />
                    </Col>
                </Row>
            </Container>
        </div >
    );
}