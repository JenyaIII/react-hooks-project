import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from 'routes';
import Topbar from 'components/Topbar/Topbar';

function App() {
	return (
		<div className="App">
			<Router>
				<Topbar />
				<Routes />
			</Router>
		</div>
	);
}

export default App;
