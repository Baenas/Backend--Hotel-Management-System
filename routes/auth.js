const express = require('express');
const User = require('../models/User');
const router = express.Router();

router.get('/whoami', (req, res, next) => {
	if (req.session.currentUser) {
		res.status(200).json(req.session.currentUser);
	} else {
		res.status(401).json({ code: 'unauthorized' });
	}
});

const { checkUsernameAndPasswordNotEmpty, checkIfLoggedIn } = require('./functions');
router.post('/login', checkUsernameAndPasswordNotEmpty, async (req, res, next) => {
	const { username, password } = res.locals.auth;
	try {
		const user = await User.findOne({ username });
		if (!user) {
			return res.status(404).json({ code: 'not-found' });
		}
		if (password == user.password) {
			req.session.currentUser = user;

			return res.json(user);
		}
		return res.status(404).json({ code: 'not-found' });
	} catch (error) {
		next(error);
	}
});

router.post('/signup', checkUsernameAndPasswordNotEmpty, async (req, res, next) => {
	const { username, password, type } = res.locals.auth;
	try {
		const user = await User.findOne({ username });
		if (user) {
			return res.status(422).json({ code: 'username-not-unique' });
		}



		const newUser = await User.create({ username, password, type });
		req.session.currentUser = newUser;
		return res.json(newUser);
	} catch (error) {
		next(error);
	}
});
router.get('/', checkIfLoggedIn, (req, res, next) => {

	User.find().then((user) => {
		return res.json(user)
	})
})
module.exports = router;