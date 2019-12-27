import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Congrats from '../src/component/congrats';
import GuessedWords from '../src/component/guessedWord';
import Input from '../src/component/input';

import { getSecretWord } from '../src/action';

export class UnconnectedApp extends Component {
	componentDidMount() {
		this.props.getSecretWord();
	}
	render() {
		return (
			<div className="container">
				<h1>Demo Jotto</h1>

				<Congrats success={this.props.success} />
				<h2>The secret word is {this.props.secretWord}</h2>
				<Input success={this.props.success} />
				<GuessedWords guessedWords={this.props.guessWords} />
			</div>
		);
	}
}
const mapStateToProps = state => {
	const { success, secretWord, guessWords } = state;
	return { success, secretWord, guessWords };
};
export default connect(mapStateToProps, { getSecretWord })(UnconnectedApp);
