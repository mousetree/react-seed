import React from 'react';

const travisVars = [
	'REACT_APP_TRAVIS_BUILD_NUMBER',
	'REACT_APP_TRAVIS_COMMIT',
	'REACT_APP_TRAVIS_JOB_NUMBER',
	'REACT_APP_BUILD_DATE'
];

const About = (props) => (
	<div>
		<h1>About</h1>
		{travisVars.map((v) => {
			return (
				<p key={v}>{v.substr(10)}: {process.env[v] || 'N/A'}</p>
			)
		})}
	</div>
);

export default About;