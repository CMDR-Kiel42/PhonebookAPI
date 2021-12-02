var mongoose = require('mongoose');


const PhoneSchema = new mongoose.Schema({
    home: {type: String},
    mobile: {type: String},
    work: {type: String},
    other: {type: String},
});

function phoneValidator(phone) {
    var ret = (phone && 
        (typeof phone.home != 'undefined' && phone.home.length > 2)     ||
        (typeof phone.mobile != 'undefined' && phone.mobile.length > 2) ||
        (typeof phone.work != 'undefined' && phone.work.length > 2)     ||
        (typeof phone.other != 'undefined' && phone.other.length > 2)
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
            message: props => 'At least one phone number should be given'
        }
    },
    email: { type: String },
    address: { 
        street: {type: String},
        postalCode: {type: String},
        country: {type: String},
    }
});

module.exports = mongoose.model('Contact', ContactSchema);
