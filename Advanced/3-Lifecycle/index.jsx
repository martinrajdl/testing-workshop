import React from 'react';

export class Likes extends React.Component {
	state = {
		likeCount: this.props.initialCount,
		updated: false,
	};

	handleClick = () => {
		this.setState(prevState => {
			return { likeCount: prevState.likeCount + 1 };
		});
	};

	componentDidUpdate() {
		if (this.state.updated === false) {
			this.setState({ updated: true });
		}
	}

	render() {
		return (
			<div className={'likeCount'}>
				<button onClick={this.handleClick}>
					Likes
					<div className={'likeButton__likes'}>
						{this.state.likeCount}
					</div>
				</button>
			</div>
		);
	}
}

// tip: you can either check the state with .state('likeCount') method or check the rendered
