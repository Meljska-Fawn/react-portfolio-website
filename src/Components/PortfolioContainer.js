import React, { useState } from 'react';
import Header from "./Header";
import Footer from "./Footer";
import NavTabs from './NavTabs';
import Skills from './pages/Skills';
import About from './pages/About';
import Projects from './pages/Projects';
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
        if (currentPage === 'Projects') {
            return <Projects />;
        }
        if (currentPage === 'Skills') {
            return <Skills />;
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
                <Row className="mb-8">
                    <Col xs={12}>
                            {renderPage()}
                    </Col>
                </Row>
                <Row className="mt-8">
                    <Col xs={12} className="fixed-bottom max-width-lg bg-light pb-2 pt-2 d-flex" style={{ maxHeight: '200px' }}>
                        <Footer />
                    </Col>
                </Row>
            </Container>
        </div >
    );
}