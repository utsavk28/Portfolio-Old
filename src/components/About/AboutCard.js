import React from 'react';
import Card from 'react-bootstrap/Card';
import { ImPointRight } from 'react-icons/im';

function AboutCard() {
    return (
        <Card className='quote-card-view'>
            <Card.Body>
                <blockquote className='blockquote mb-0'>
                    <p style={{ textAlign: 'justify' }}>
                        I'm a Pre Final Year Undergraduate student in
                        Information Technology at{' '}
                        <i>
                            <b className='purple'>VJTI, Mumbai, India</b>{' '}
                        </i>{' '}
                        I'm deeply passionate about software development and
                        innovations in the field. Currently learning about{' '}
                        <i>
                            <b className='purple'>Web Development</b>{' '}
                        </i>{' '}
                        and{' '}
                        <i>
                            <b className='purple'>Machine Learning.</b>{' '}
                        </i>{' '}
                        I'm also an{' '}
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
