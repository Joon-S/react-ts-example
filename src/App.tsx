import * as React from 'react';

interface Page {
	color: string;
}

const App = ({ color }: Page): JSX.Element => {
	return (
		<>
			<h1>Welcome to React with Typescript</h1>
			<p>The color of this page is: {color}</p>
		</>
	);
};
export default App;
