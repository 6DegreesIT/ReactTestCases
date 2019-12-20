import React from 'react';

import './App.css';
import Congrats from '../src/component/congrats';
import GuessedWords from '../src/component/guessedWord';

function App() {
	let guessedWords = [
		{
			guessedWord: 'abc',
			letterMatchCount: 1,
		},
		{
			guessedWord: 'abca',
			letterMatchCount: 2,
		},
	];
	let props2 = {
		guessedWords: guessedWords,
	};
	return (
		<div className="container">
			<h1>Demo Jotto</h1>
			<Congrats success={true} />
			<GuessedWords {...props2} />
		</div>
	);
}

export default App;
