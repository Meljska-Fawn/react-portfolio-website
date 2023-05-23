import React from 'react';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function About() {
    return (
        <Container>
            <Row>
                <Col xs={12} md={6}>
                    <h1>HI THERE IT'S MELISSA</h1>
                </Col>
                <Col xs={12} md={6}>
                    <Image src="./images/profile-photo-bw.jpeg" className="img-fluid rounded-pill"></Image>
                </Col>
            </Row>
            <Row>
                <h4>I'm a Full-Stack Web Developer with a background in Graphic Design and Biology. I've spent the previous 2.5 years working on commercial fishing vessels as a fisheries biologiest, collecting data for NOAA. Now I'm intergrating my love for research, methods, models, organization, systems, data collection, and management with skills in design thinking and quality craftsmanship to create solutions for a better web presence and information display for a rich human experience.</h4>
            </Row>
            <Row>
                <h3>When I'm not developing, I'm also passionate about</h3>
            </Row>
            <Row>
                <Col xs={12} md={6}>
                    <p>Whitewater Kayaking</p>
                    <p>Skiing</p>
                    <p>Mountain Biking</p>
                    <p>Climbing</p>
                </Col>
                <Col xs={12} md={6}>
                    <p>Bird Watching</p>
                    <p>Mushroom Foraging</p>
                    <p>Fly Fishing</p>
                    <p>Acro Yoga</p>
                </Col>
            </Row>
        </Container>
    );
}