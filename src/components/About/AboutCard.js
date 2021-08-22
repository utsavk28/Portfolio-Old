import React from 'react';
import Card from 'react-bootstrap/Card';
import { ImPointRight } from 'react-icons/im';

function AboutCard() {
    return (
        <Card className='quote-card-view'>
            <Card.Body>
                <blockquote className='blockquote mb-0'>
                    <p style={{ textAlign: 'justify' }}>
                        I'm a Pre Final Year Information Technology
                        Undergraduate from Mumbai, India. I'm deeply passionate
                        about software development and innovations in the field.
                        Currently learning about Web Development and Machine
                        Learning. I'm also an{' '}
                        <span className='purple'>
                            {' '}
                            <a
                                className='purple'
                                style={{ linkDecoration: 'none' }}
                                href='https://github.com/utsavk28'
                            >
                                active contributor
                            </a>{' '}
                        </span>{' '}
                        to the open-source community.
                        <br />
                        <br />
                        Apart from programming, some other activities that I
                        love to do!
                    </p>
                    <ul>
                        <li className='about-activity'>
                            <ImPointRight /> Playing Games
                        </li>
                        <li className='about-activity'>
                            <ImPointRight /> Watching a Good Anime
                        </li>
                        <li className='about-activity'>
                            <ImPointRight /> Reading light novels
                        </li>
                    </ul>

                    <p style={{ marginBlockEnd: 0, color: 'rgb(155 126 172)' }}>
                        {'I’ll leave tomorrow’s problems to tomorrow’s me'}{' '}
                    </p>
                    <footer className='blockquote-footer'>Utsav</footer>
                </blockquote>
            </Card.Body>
        </Card>
    );
}

export default AboutCard;
