var mongoose = require('mongoose');

var ContactSchema = new mongoose.Schema({
    name: { type: String, required: true },
    phone: {
		home: {type: String},
		mobile: {type: String},
		work: {type: String},
		other: {type: String},
    },
    email: { type: String },
    address: { 
        street: {type: String},
        postalCode: {type: String},
        country: {type: String},
    }
});

module.exports = mongoose.model('Contact', ContactSchema);
