import React from 'react';

const travisVars = [
	'TRAVIS_BUILD_NUMBER',
	'TRAVIS_COMMIT',
	'TRAVIS_JOB_NUMBER'
];

const About = (props) => (
	<div>
		<h1>About</h1>
		{travisVars.map((v) => {
			return (
				<p>{v}: {process.env[v] || 'N/A'}</p>
			)
		})}
	</div>
);

export default About;