import React from 'react';
import {Route, IndexRoute} from 'react-router';

import AppContainer from './features/AppContainer/AppContainer';
import ComponentsIndex from './features/ComponentsIndex/ComponentsIndex';
import ComponentsSimple from './features/ComponentsSimple/ComponentsSimple';
import ComponentsCSSActions from './features/ComponentsCSSActions/ComponentsCSSActions';
import ComponentsAPIComponents from './features/ComponentsAPIComponents/ComponentsAPIComponents';

export default(
	<Route path="/" component={AppContainer}>
		<IndexRoute component={ComponentsIndex}/>
		<Route path="components/simple" component={ComponentsSimple} />
		<Route path="components/css" component={ComponentsCSSActions} />
		<Route path="components/api" component={ComponentsAPIComponents} />
	</Route>
);
