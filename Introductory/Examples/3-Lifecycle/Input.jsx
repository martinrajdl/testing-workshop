import React from 'react';

export class InputWrapper extends React.Component {
	state = {
		value: this.props.placeholder,
	};

	handleInputChange = event => {
		this.setState({ value: event.target.value });
	};

	render() {
		return (
			<div className={'inputHolder'}>
				<span className="inputValue">{this.state.value}</span>
				<input
					type="text"
					value={this.state.value}
					onChange={this.handleInputChange}
				/>
			</div>
		);
	}
}
