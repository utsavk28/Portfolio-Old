import React from 'react';
import Typewriter from 'typewriter-effect';

function Type() {
    return (
        <Typewriter
            options={{
                strings: [
                    'Full Stack Web Developer',
                    'Open Source Contributor',
                    'Machine Learning Enthusiast',
                    'Competitive Programmer',
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
            }}
        />
    );
}

export default Type;
