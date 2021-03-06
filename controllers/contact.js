var Contact = require('../models/contact');

exports.postContact = function(req, res) {
    var contact = new Contact();

    contact.name = req.body.name;
    contact.phone = req.body.phone;
    contact.email = req.body.email;
    contact.address = req.body.address;
    contact.userId = req.user._id;

    contact.save(function(err) {
        if (err)
            res.send(err);
        else
            res.json({ message: 'Contact saved!', data: contact });
    });
};

exports.getAllContacts = function(req, res) {
    Contact.find( {userId: req.user._id}, function(err, contacts) {
        if (err)
            res.send(err);
        else
            res.json(contacts);
    });
};

exports.getContact = function(req, res) {
    Contact.find( { userId: req.user._id, _id: req.params.contact_id }, function(err, contact) {
        if (err)
            res.send(err);
        else
            res.json(contact);
    });
};

exports.putContact = function(req, res) {
    Contact.updateOne( { userId: req.user._id, _id: req.params.contact_id }, function(err, contact) {
        if (err)
            res.send(err);
        else {
            contact.name = req.body.name;
            contact.phone = req.body.phone;
            contact.email = req.body.email;
            contact.address = req.body.address;

            contact.save(function(err) {
                if (err)
                    res.send(err);
    
                res.json(contact);
            });
        }
    });
};

exports.deleteContact = function(req, res) {
    Contact.deleteOne( { userId: req.user._id, _id: req.params.contact_id }, function(err) {
        if (err)
            res.send(err);
        else
            res.json({ message: 'Contact deleted' });
    });
};
