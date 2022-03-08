import React from 'react';
import ReactDOM from 'react-dom';
import Header from 'header/Header';

import './index.css';

const App = () => (
	<>
		<Header />
		<div className="container">
			<div>Name: home</div>
			<div>Framework: react</div>
			<div>Language: JavaScript</div>
			<div>CSS: Empty CSS</div>
		</div>
	</>
);
ReactDOM.render(<App />, document.getElementById('app'));
