import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import myImg from '../../Assets/avatar.svg';
import Tilt from 'react-parallax-tilt';
import {
    AiFillGithub,
    AiOutlineTwitter,
    AiFillInstagram,
} from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';

function Home2() {
    return (
        <Container fluid className='home-about-section' id='about'>
            <Container>
                <Row>
                    <Col md={8} className='home-about-description'>
                        <h1 style={{ fontSize: '2.6em' }}>
                            LET ME <span className='purple'> INTRODUCE </span>{' '}
                            MYSELF
                        </h1>
                        <p className='home-about-body'>
                            I'm a Pre Final Year Undergraduate student in
                            Information Technology at{' '}
                            <i>
                                <b className='purple'>VJTI, Mumbai.</b>{' '}
                            </i>{' '}
                            Interested in coding, learning and building stuff.
                            My field of Interest's are in{' '}
                            <i>
                                <b className='purple'>
                                    Competitive Programming
                                </b>{' '}
                            </i>{' '}
                            and building new &nbsp;
                            <i>
                                <b className='purple'>
                                    Web Technologies and Products.{' '}
                                </b>{' '}
                                Also in areas related to{' '}
                                <b className='purple'>
                                    Machine Learning and Natural Launguage
                                    Processing.
                                </b>
                            </i>
                            <br />
                            <br />I am fluent in classics like
                            <i>
                                <b className='purple'>
                                    {' '}
                                    C++, Javascript and Python.{' '}
                                </b>
                            </i>
                            <br />
                            <br />
                            Whenever possible, I also apply my passion for
                            developing products with{' '}
                            <b className='purple'>Node.js</b> and
                            <i>
                                <b className='purple'>
                                    {' '}
                                    Modern Javascript Library and Frameworks
                                </b>
                            </i>
                            &nbsp; like
                            <i>
                                <b className='purple'>
                                    {' '}
                                    React.js , Redux.js and SocketIO.js
                                </b>
                            </i>
                        </p>
                    </Col>
                    <Col md={4} className='myAvtar'>
                        <Tilt>
                            <img
                                src={myImg}
                                className='img-fluid'
                                alt='avatar'
                            />
                        </Tilt>
                    </Col>
                </Row>
                <Row>
                    <Col md={12} className='home-about-social'>
                        <h1>FIND ME ON</h1>
                        <p>
                            Feel free to{' '}
                            <span className='purple'>connect </span>with me
                        </p>
                        <ul className='home-about-social-links'>
                            <li className='social-icons'>
                                <a
                                    href='https://github.com/utsavk28'
                                    target='_blank'
                                    rel='noreferrer'
                                    className='icon-colour  home-social-icons'
                                >
                                    <AiFillGithub />
                                </a>
                            </li>
                            <li className='social-icons'>
                                <a
                                    href='https://twitter.com/UtsavKhatu'
                                    target='_blank'
                                    rel='noreferrer'
                                    className='icon-colour  home-social-icons'
                                >
                                    <AiOutlineTwitter />
                                </a>
                            </li>
                            <li className='social-icons'>
                                <a
                                    href='https://www.linkedin.com/in/utsav-khatu-431b741bb/'
                                    target='_blank'
                                    rel='noreferrer'
                                    className='icon-colour  home-social-icons'
                                >
                                    <FaLinkedinIn />
                                </a>
                            </li>
                            <li className='social-icons'>
                                <a
                                    href='https://www.instagram.com/utsavk02/'
                                    target='_blank'
                                    rel='noreferrer'
                                    className='icon-colour home-social-icons'
                                >
                                    <AiFillInstagram />
                                </a>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}
export default Home2;
