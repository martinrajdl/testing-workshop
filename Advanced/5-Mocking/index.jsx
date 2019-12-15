import React from 'react';
import utils from './utils';

export class Component extends React.Component {
	handleClick = () => {
		utils
			.greet(this.props.id)
			.then(greeting => this.props.handleClick(greeting));
	};

	render() {
		return (
			<div onClick={this.handleClick}>
				<p>Hello</p>
			</div>
		);
	}
}
