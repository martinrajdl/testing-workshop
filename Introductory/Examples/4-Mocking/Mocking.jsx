import React, { useState, useEffect } from 'react';
import { logger } from './module';

export const Component = props => {
	const [count, setCount] = useState(0);

	useEffect(() => {
		logger('Component rendered');
	}, []);

	const handleClick = () => {
		setCount(count + 1); //triggers useEffect
		props.handler(count); //triggers call of the function passed down in props
	};

	return (
		<div className="Counter">
			<button onClick={handleClick} />
			<span>{count}</span>
		</div>
	);
};
