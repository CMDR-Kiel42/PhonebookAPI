var mongoose = require('mongoose');


const PhoneSchema = new mongoose.Schema({
    home: {type: String},
    mobile: {type: String},
    work: {type: String},
    other: {type: String},
});

const AdressSchema = new mongoose.Schema({
    street: { type: String, required: true },
	postalCode: { type: String, required: true },
	country: { type: String, required: true },
});

function phoneValidator(phone) {
    var ret = (phone && 
        (typeof phone.home != 'undefined' && phone.home.length > 1)     ||
        (typeof phone.mobile != 'undefined' && phone.mobile.length > 1) ||
        (typeof phone.work != 'undefined' && phone.work.length > 1)     ||
        (typeof phone.other != 'undefined' && phone.other.length > 1)
    );
    return ret;
};

var ContactSchema = new mongoose.Schema({
    name: { type: String, required: true },
    phone: {
        type: PhoneSchema,
        required: [true, 'At least one phone number should be given'],
        validate: {
            validator: phoneValidator,
            message: 'At least one phone number should be given'
        }
    },
    email: { type: String },
    address: {type: AdressSchema},
	userId: { type: String, required: true }
});

module.exports = mongoose.model('Contact', ContactSchema);
