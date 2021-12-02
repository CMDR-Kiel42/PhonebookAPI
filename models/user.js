var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

var UserSchema = new mongoose.Schema({
	username: {
		type: String,
		unique: true,
		required: true
	},
	password: {
		type: String,
		required: true
	}
});

UserSchema.pre('save', function(callback) {
	const user = this;

	bcrypt.genSalt(5, function(err, salt) {
		if (err) {
			return callback(err);
		}
		else {
			user.password = bcrypt.hashSync(user.password, salt);
			callback();
		}
	});
});

UserSchema.methods.verifyPassword = function(password, callback) {
	bcrypt.compare(password, this.password, function (err, isMatch) {
		if (err) {
			return callback(err);
		}
		else {
			callback(null, isMatch);
		}
	})
};

module.exports = mongoose.model('User', UserSchema);