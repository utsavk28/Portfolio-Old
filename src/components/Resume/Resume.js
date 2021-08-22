import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Particle from '../Particle';
import Resumecontent from './ResumeContent';
import pdf from '../../Assets/Soumyajit-Behera.pdf';
import { AiOutlineDownload } from 'react-icons/ai';

function Resume() {
    const codechef = [1748, '3 Star'];
    const codeforce = [1377, 'Pupil'];
    const sem = 4;
    const cgpa = 8.85;

    return (
        <Container fluid className='resume-section'>
            <Particle />
            <Container>
                <Row style={{ justifyContent: 'center', position: 'relative' }}>
                    <Button variant='primary' href={pdf} target='_blank'>
                        <AiOutlineDownload />
                        &nbsp;Download CV
                    </Button>
                </Row>
                <Row className='resume'>
                    <Col md={6} className='resume-left'>
                        <h3 className='resume-title'>Experience</h3>
                        <Resumecontent
                            title='Delta Winter of Code 2020 program [Mentee]'
                            date='November 2020 — January 2021'
                            content={[
                                'Successfully completed Delta Winter of Code 2020 program as an active contributor of NIT Trichy by contributing to the open source project Social - CLI.',
                                'Proposal Link :',
                                'https://bit.ly/Utsav_SociallCli_DWoC_Proposal',
                            ]}
                        />
                        <h3 className='resume-title'>
                            Extracurricular Activities
                        </h3>
                        <Resumecontent
                            title='Competitive Programming [May 2020 - Present]'
                            content={[
                                `Highest Rating On CodeChef : ${codechef[0]} , ${codechef[1]}`,
                                `Highest Rating On CodeForce : ${codeforce[0]} , ${codeforce[1]}`,
                                `StopStalk Profile : `,
                                'https://www.stopstalk.com/user/profile/utsavk02',
                            ]}
                        />
                    </Col>
                    <Col md={6} className='resume-right'>
                        <h3 className='resume-title'>Education</h3>
                        <Resumecontent
                            title='B.TECH Information Technology [VJTI, Mumbai] '
                            date='2019 - Present'
                            content={[`CGPA: ${cgpa} (Till ${sem}th Sem)`]}
                        />
                        <Resumecontent
                            title='12TH BOARD [Sathaye College, Mumbai]'
                            date='2017 - 2019'
                            content={['Precentage: 87.54%']}
                        />
                        <Resumecontent
                            title='10TH BOARD [Vivek Vidyalaya ,Mumbai] '
                            date='2007 - 2017'
                            content={['Precentage: 88%']}
                        />
                        <h3 className='resume-title'>Ranks and Achivements</h3>
                        <Resumecontent
                            title=''
                            content={[
                                `Highest Rating On CodeChef : ${codechef[0]} , ${codechef[1]}`,
                                `Highest Rating On CodeForce : ${codeforce[0]} , ${codeforce[1]}`,
                                'Successfully completed Delta Winter of Code 2020 program by NIT Trichy as an active contributor',
                                'Participant in Hash Code 2021',
                            ]}
                        />
                    </Col>
                </Row>
                <Row style={{ justifyContent: 'center', position: 'relative' }}>
                    <Button variant='primary' href={pdf} target='_blank'>
                        <AiOutlineDownload />
                        &nbsp;Download CV
                    </Button>
                </Row>
            </Container>
        </Container>
    );
}

export default Resume;
