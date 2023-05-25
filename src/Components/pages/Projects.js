import React, { useState } from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Slide from 'react-reveal/Slide';

// const styles = {
//     linkStyle: {
//         color: 'inherit',
//         text- decoration: 'none',
// },

//     link-unstyled: hover: {
//         text - decoration: 'none',
// }
// }

export default function Projects() {
    // const [hover, setHover] = useState(false);
    return (
        <Slide left>
            <Container className="fluid mt-5" style={{ maxWidth: '1000px' }}>
                <Row className="mb-3">
                    <Col xs={12} md={6} className="mb-3">
                        <Card style={{ width: '30rem' }} className="flex flex-wrap -m-4 mb-3">
                            {projects.map((project) => (
                                <a href={project.deployed} key={project.img} className="position-relative dark-link">
                                    <img
                                        alt="gallery"
                                        className="img-fluid rounded"
                                        src={project.img}
                                        // src={hover ? project.img : project.still}
                                    />
                                    <Card.Body>
                                        <Card.Title className="">
                                            {project.title}<Card.Link href={project.github} className="dark-link">
                                                <GitHubIcon />
                                            </Card.Link>
                                        </Card.Title>
                                    </Card.Body>
                                </a>
                            ))}
                        </Card>
                    </Col>
                    <Col xs={12} md={6}>
                        <Card style={{ width: '30rem' }} className="flex flex-wrap -m-4">
                            {secondProjects.map((secondProject) => (
                                <a href={secondProject.deployed} key={secondProject.img} className="">
                                    <Card.Img variant="top"
                                        alt="gallery"
                                        className="img-fluid rounded"
                                        src={secondProject.img}
                                    />
                                    <Card.Body>
                                        <Card.Title className="">
                                            {secondProject.title}<Card.Link href={secondProject.github}>
                                                <GitHubIcon />
                                            </Card.Link>
                                        </Card.Title>
                                    </Card.Body>
                                </a>
                            ))}
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Slide>
    );
}

const projects = [
    {
        img: './images/weather-dashboard.gif',
        still: './images/write-this-down.png',
        deployed: 'https://meljska-fawn.github.io/5-day-weather-forecast/',
        title: '5 Day Weather Forecast',
        github: 'https://github.com/Meljska-Fawn/5-day-weather-forecast',
    },
    {
        img: './images/jobstable_course.gif',
        still: '',
        deployed: 'https://jobstacle-course.herokuapp.com/login',
        title: 'Jobstacle Course',
        github: 'https://github.com/Meljska-Fawn/Jobstacle-course',
    },
    {
        img: './images/tech-blog.gif',
        still: '',
        deployed: 'https://obscure-dusk-87979.herokuapp.com/',
        title: 'Talk Techy to Me - Tech Blog',
        github: 'https://github.com/Meljska-Fawn/talk_techy_to_me',
    },
];
const secondProjects = [
    {
        img: './images/work-day-scheduler.gif',
        deployed: 'https://meljska-fawn.github.io/organize-your-workday/',
        title: 'Organize Your Workday',
        github: 'https://github.com/Meljska-Fawn/organize-your-workday',
    },
    {
        img: './images/mindful-cal-c.gif',
        deployed: 'https://aboubacar7.github.io/mindful-cal-c/',
        title: 'Mindful (Cal)c',
        github: 'https://github.com/Meljska-Fawn/mindful-calc-c',
    },
    {
        img: './images/write-this-down.png',
        deployed: 'https://meljska-fawn.github.io/hey-write-this-down/',
        title: 'Hey! Write This Down',
        github: 'https://github.com/Meljska-Fawn/hey-write-this-down',
    },
];

