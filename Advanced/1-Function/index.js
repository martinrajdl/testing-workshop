export const filterInactiveUsers = users => {
	if (users.length) {
		return users.filter(user => user.active === false);
	}
	return 'No users';
};
