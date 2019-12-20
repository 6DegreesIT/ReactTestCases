import React from 'react';
import PropTypes from 'prop-types';

const GuessedWords = props => {
	let content;
	if (props.guessedWords.length === 0) {
		content = <span data-test="no-guessed-word">Try to guess the secret word</span>;
	} else {
		console.log('props.', props.guessedWords.length);
		const rows =
			props.guessedWords &&
			props.guessedWords.map((word, index) => (
				<tr data-test="guessed-word" key={index}>
					<td>{word.guessedWord}</td>
					<td>{word.letterMatchCount}</td>
				</tr>
			));
		content = (
			<div data-test="guessed-words">
				<h2>Guessed Word</h2>
				<table className="table table-sm">
					<thead className="thead-light">
						<tr>
							<th>Guess</th>
							<th>Matching Letters</th>
						</tr>
					</thead>
					<tbody>{rows}</tbody>
				</table>
			</div>
		);
	}
	return <div data-test="component-guessedWord">{content}</div>;
};

GuessedWords.propTypes = {
	guessedWords: PropTypes.arrayOf(
		PropTypes.shape({
			guessedWord: PropTypes.string.isRequired,
			letterMatchCount: PropTypes.number.isRequired,
		})
	).isRequired,
};
export default GuessedWords;
