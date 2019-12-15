import request from './request-module';

export function getUserName(userID) {
	return request('/users/' + userID).then(
		user => user.firstName + ' ' + user.lastName
	);
}

const greet = async id => {
	const fullName = await exportFunctions.getUserName(id);
	return `Hey, ${fullName}`;
};

const exportFunctions = {
	getUserName,
	greet,
};

export default exportFunctions;
