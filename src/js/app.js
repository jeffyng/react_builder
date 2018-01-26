import React from 'react';
import { render } from 'react-dom';

const Component = () => <div>Welcome to React!</div>;

render(
	<Component />,
	document.getElementById('root')
);
