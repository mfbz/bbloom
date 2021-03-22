import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { VaporLayout } from './components/vapor-layout';
import { App } from './views/app';
import { Home } from './views/home';

export const Main = React.memo(function Main({}: {}) {
	return (
		<BrowserRouter>
			<VaporLayout>
				<Switch>
					<Route key={'/'} path={'/'} exact={true}>
						<Home />
					</Route>

					<Route key={'/app'} path={'/app'} exact={true}>
						<App />
					</Route>
				</Switch>
			</VaporLayout>
		</BrowserRouter>
	);
});
