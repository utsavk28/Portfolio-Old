import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from './ProjectCards';
import Particle from '../Particle';

import Eggstraterrestrial from '../../Assets/Projects/Eggstraterrestrial.png';
import Alien_Invasion from '../../Assets/Projects/Alien_Invasion.png';
import CourseSpot from '../../Assets/Projects/CourseSpot.png';
import Social from '../../Assets/Projects/Social.png';
import ECart from '../../Assets/Projects/ECart.png';
import Firebase from '../../Assets/Projects/Firebase.png';

function Projects() {
    return (
        <Container fluid className='project-section'>
            <Particle />
            <Container>
                <h1 className='project-heading'>
                    My Recent <strong className='purple'>Works </strong>
                </h1>
                <p style={{ color: 'white' }}>
                    Here are a few projects I've worked on recently.
                </p>
                <Row
                    style={{ justifyContent: 'center', paddingBottom: '10px' }}
                >
                    <Col md={4} className='project-card'>
                        <ProjectCard
                            imgPath={Social}
                            isBlog={false}
                            title='Social'
                            description='A Complete A-Z Social Media Web Application with Real Time Chat functionality. Core Social Web App Features like CRUD Operation on Post, Profile and Comments Developed along with Real Time Chat Feature , Like/Unlike Post & Comments and ability to Save Post. Developed Using MERN Stack , Redux , SocketIO'
                            link='https://github.com/utsavk28/Social'
                        />
                    </Col>

                    <Col md={4} className='project-card'>
                        <ProjectCard
                            imgPath={ECart}
                            isBlog={false}
                            title='E-Cart'
                            description='An E-Commerce Website with Cart and Payment Gateway. Having features which allows user to add/remove items from the Cart with Integrated Payment Gateway. Products fetched using FakeStore Api and Inlisting them onto various Categorical Pages. Developed Using React , Bootstrap , Redux , FakeStore API and StripeJs'
                            link='https://github.com/utsavk28/E-Cart'
                        />
                    </Col>
                    <Col md={4} className='project-card'>
                        <ProjectCard
                            imgPath={CourseSpot}
                            isBlog={false}
                            title='CourseSpot'
                            description='There are so many online educational platforms offering courses on various topics. It becomes a tedious task to go to each site and search for courses. COURSESPOT is a web app that shows most of the courses available on internet of various domains. Developed Using Flask, BeautifulSoup, SQL, Jinja2, HTML, CSS, JS and Bootstrap'
                            link='https://github.com/utsavk28/CodeCrafters-CourseSuggestingWebApp'
                        />
                    </Col>

                    <Col md={4} className='project-card'>
                        <ProjectCard
                            imgPath={Alien_Invasion}
                            isBlog={false}
                            title='Alien_Invasion'
                            description='Developed a 2D Shooting Game in Python using Pygame.In this game the player shoot downs fleet of aliens each level. The higher the level gets  the faster the ship and aliens fleets moves and so does the game.'
                            link='https://github.com/utsavk28/Alien_Invasion'
                        />
                    </Col>

                    <Col md={4} className='project-card'>
                        <ProjectCard
                            imgPath={Firebase}
                            isBlog={false}
                            title='FireChat'
                            description='A Real Time Chat Web Application with Google Authentication. Developed Real Time Chat Features using Firebase and Integrated Google Authentication in the Web App. Developed Using Firebase , React and Bootstrap'
                            link='https://github.com/utsavk28/FireChat'
                        />
                    </Col>

                    <Col md={4} className='project-card'>
                        <ProjectCard
                            imgPath={Eggstraterrestrial}
                            isBlog={false}
                            title='Eggstraterrestrial'
                            description='An Simple Animation Website of an Egg as space ship moving in space. Developed Using Plain HTML and CSS'
                            link='https://github.com/utsavk28/Eggstraterrestrial'
                        />
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default Projects;
