import * as React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Topics from './components/Topics';

interface Page {
	color: string;
}

const App = ({ color }: Page): JSX.Element => {
	return (
		<>
			<h1>Welcome to React with Typescript</h1>
			<p>The color of this page is: {color}</p>
			<BrowserRouter>
				<div>
					<ul>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/topics">Topics</Link>
						</li>
					</ul>

					<hr />

					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route path="/topics">
							<Topics />
						</Route>
					</Switch>
				</div>
			</BrowserRouter>
		</>
	);
};

export default App;
