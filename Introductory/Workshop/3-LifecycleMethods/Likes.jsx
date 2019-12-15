import React from 'react';

export class Likes extends React.Component {
	state = {
		likeCount: this.props.initialCount,
		voted: false,
	};

	handleClick = () => {
		if (!this.state.voted) {
			this.setState(prevState => {
				return { likeCount: prevState.likeCount + 1, voted: true };
			});
		}
	};

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
