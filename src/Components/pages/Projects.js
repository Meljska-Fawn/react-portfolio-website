import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Work() {
    return (
        <Container>
            <Row>
            <Col xs={12} md={6}>
                <div className="flex flex-wrap -m-4">
                    {projects.map((project) => (
                        <a href={project.deployed} key={project.img} className="sm:w-1/2 w-100 p-4">
                            <div className="flex relative">
                                <img
                                    alt="gallery"
                                    className="absolute img-fluid rounded"
                                    src={project.img}
                                />
                                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                                    <h1 className="title-font text-lg font-medium text-white mb-3">
                                        {project.title}<a href={project.github}>
                                            <GitHubIcon />
                                        </a>
                                    </h1>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </Col>
            <Col xs={12} md={6}>
                <div className="flex flex-wrap -m-4">
                    {secondProjects.map((secondProject) => (
                        <a href={secondProject.deployed} key={secondProject.img} className="sm:w-1/2 w-100 p-4">
                            <div className="flex relative">
                                <img
                                    alt="gallery"
                                    className="absolute inset-0 w-full h-full object-cover object-center"
                                    src={secondProject.img}
                                />
                                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                                    <h1 className="title-font text-lg font-medium text-white mb-3">
                                        {secondProject.title}<a href={secondProject.github}>
                                            <GitHubIcon />
                                        </a>
                                    </h1>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </Col>
            </Row>
        </Container>
    );
}

const projects = [
    {
        img: './images/weather-dashboard.gif',
        deployed: 'https://meljska-fawn.github.io/5-day-weather-forecast/',
        title: '5 Day Weather Forecast',
        github: 'https://github.com/Meljska-Fawn/5-day-weather-forecast',
    },
    {
        img: './images/jobstable_course.gif',
        deployed: 'https://jobstacle-course.herokuapp.com/login',
        title: 'Jobstacle Course',
        github: 'https://github.com/Meljska-Fawn/Jobstacle-course',
    },
    {
        img: './images/tech-blog.gif',
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

