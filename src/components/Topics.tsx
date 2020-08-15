import { useRouteMatch, Link, Switch, Route } from 'react-router-dom';
import * as React from 'react';
import Topic from './Topic';

const Topics = (): JSX.Element => {
	const { path, url } = useRouteMatch();
	console.log('path -> ', path);
	console.log('url -> ', url);
	return (
		<>
			<h2>Topics</h2>
			<ul>
				<li>
					<Link to="/topics/rendering">Rendering with React</Link>
				</li>
				<li>
					<Link to="/topics/components">Components</Link>
				</li>
				<li>
					<Link to="/topics/props-v-state">Props v. State</Link>
				</li>
			</ul>

			<Switch>
				<Route exact path={path}>
					<h3>Please select a topic.</h3>
				</Route>
				<Route path="/topics/:topicId">
					<h2>Hello?</h2>
					<Topic />
				</Route>
			</Switch>
		</>
	);
};

export default Topics;
