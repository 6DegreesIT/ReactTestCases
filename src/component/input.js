import React, { Component } from 'react';
import { connect } from 'react-redux';

import { guessWord } from '../action';
export class UnconnectedInput extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentGuess: ' ',
		};
		this.submitEvent = this.submitEvent.bind(this);
	}
	submitEvent(event) {
		console.log('hfhfhfhfhfhfhfh');
		event.preventDefault();
		const guessedWord = this.state.currentGuess;
		if (guessedWord && guessedWord.length > 0) {
			this.props.guessWord(guessedWord);
			this.setState({
				currentGuess: '',
			});
		}
	}
	render() {
		const contents = this.props.success ? null : (
			<form className="form-inline">
				<input 
				data-test="input_box" 
				className="mb-2 mx-sm-3" 
				type="text" 
				value={this.state.currentGuess}
				onChange={event => {
						this.setState({ currentGuess: event.target.value });
					}}
				placeholder="enter guess" />
				<button
					data-test="submit_button"
					type="submit"
					className="btn btn-primary mb-2"
					onClick={event => this.submitEvent(event)}
				>
					Submit
				</button>
			</form>
		);
		return <div data-test="component-input">{contents}</div>;
	}
}
const mapStateToProps = ({ success }) => {
	return { success };
};
export default connect(mapStateToProps, { guessWord })(UnconnectedInput);
