import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs({ currentPage, handlePageChange }) {

    return (
        <Navbar expand="lg" fixed="top" className="max-width-lg bg-light pb-2">
            <Container>
            <Navbar.Brand className="nav-item"><a href="#about" onClick={() => handlePageChange('About')} className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}>Melissa Vaughn</a></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" >
                    <Nav className="nav me-auto text-align-right">
                            <li className="nav-item">
                                <a
                                    href="#projects"
                                    onClick={() => handlePageChange('Projects')}
                                    // Check to see if the currentPage is `Projects`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                                    className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}
                                >
                                    Projects
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    href="#skills"
                                    onClick={() => handlePageChange('Skills')}
                                    // Check to see if the currentPage is `Skills`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                                    className={currentPage === 'Skills' ? 'nav-link active' : 'nav-link'}
                                >
                                    Skills
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    href="#contact"
                                    onClick={() => handlePageChange('Contact')}
                                    // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                                    className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                                >
                                    Contact
                                </a>
                            </li>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavTabs;