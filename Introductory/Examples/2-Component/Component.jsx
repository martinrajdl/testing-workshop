import React from 'react';

export const Welcome = props => {
	return <h1 className="name">Hello, {props.name}</h1>;
};

export const Component = ({ users }) => {
	return (
		<div className="users">
			{users.map(user => (
				<Welcome key={user.name} name={user.name} />
			))}
		</div>
	);
};
