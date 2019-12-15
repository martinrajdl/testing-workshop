import React from 'react';
import { Heading } from './Heading';

export const Component = props => {
	const { hasHeading, content } = props;

	return (
		<div className={hasHeading ? 'important' : 'regular'}>
			{hasHeading ? (
				<Heading content={content} />
			) : (
				<p>Content of this is: {content}</p>
			)}
		</div>
	);
};
