import React from 'react';
import { Heading } from './Heading';

export const Component = ({ content, isHeading }) => (
	<div className={isHeading ? 'important' : 'regular'}>
		{isHeading ? (
			<Heading content={content} />
		) : (
			<p>Content of this is: {content}</p>
		)}
	</div>
);
