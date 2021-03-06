const User = require('../models/user');

exports.postUser = function(req, res) {
	var user = new User({
		username: req.body.username,
		password: req.body.password
	});

	user.save(function(err) {
		if (err)
			res.send(err);
		else
			res.json({ message: 'New user created' });
	});
};

exports.getUsers = function(req, res) {
	User.find(function(err, users) {
		if (err)
			res.send(err);
		else
			res.json(users);
  	});
};
