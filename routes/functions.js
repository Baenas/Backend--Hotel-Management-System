const checkUsernameAndPasswordNotEmpty = (req, res, next) => {
	const { username, password } = req.body;

	if (username !== '' && password !== '') {
		res.locals.auth = req.body;
		next();
	} else {
		res.status(422).json({ code: 'validation' });
	}
};

const checkIfLoggedIn = (req, res, next) => {
	if (req.session.currentUser) {
		res.locals.currentUser = req.session.currentUser;
		next();
	} else {
		res.status(401).json({ code: 'unauthorized' });
	}
};

module.exports = {
	checkIfLoggedIn,
	checkUsernameAndPasswordNotEmpty,
};